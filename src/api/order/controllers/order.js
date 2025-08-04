"use strict";

// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    try {
      if (!Array.isArray(products) || products.length === 0) {
        ctx.response.status = 400;
        return { error: "No se enviaron productos válidos." };
      }

      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          if (!item) {
            throw new Error(`Producto con ID ${product.id} no encontrado`);
          }

          if (!item.price || isNaN(item.price)) {
            throw new Error(`Precio inválido para el producto ${item.productName}`);
          }

          return {
            price_data: {
              currency: "cop",
              product_data: {
                name: item.productName,
              },
              unit_amount: Math.round(item.price * 100), // ¡Stripe requiere montos en centavos!
            },
            quantity: 1,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["CO"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "/cancel",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      console.error("Error al crear la orden:", error);
      ctx.response.status = 500;
      return { error: error.message || "Error interno del servidor" };
    }
  },
}));
