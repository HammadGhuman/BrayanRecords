import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  console.log("key = ", key);
  const stripe = new Stripe(key as string);
  try {
    const data = await req.json();
    const session_details = data.session_details;
    const user_id = data.user_id;
    console.log("stripe create customer", user_id);
    let customer;
    if (user_id) {
      customer = await stripe.customers.create({
        metadata: {
          userId: user_id,
          session_details: JSON.stringify(session_details),
        },
      });
    }
    console.log(session_details);
    const line_items = [
      {
        price_data: {
          currency: "usd",
          unit_amount: 100,
          product_data: {
            name: "session details",
            description: "No extras",
          },
        },
        quantity: 1,
      },
    ];
    if (!customer) {
      return NextResponse.json(
        { error: "customer not created" },
        { status: 500 }
      );
    }
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items,
      mode: "payment",
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
    });

    console.log("session = ", session);
    console.log("customer = ", customer);
    return NextResponse.json({ sessions: session, customer: customer });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err, status: 500 });
  }
}
