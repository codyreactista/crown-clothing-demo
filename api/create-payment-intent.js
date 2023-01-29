import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function createPaymentIntent(req, res) {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error({ error });

    res.status(400).json({ error });
  }
}
