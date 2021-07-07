/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51ImAEASDaBhYbeNZXWBYVNRyDfPTN0SbdXsYNwV3sC3CYyvTfM0fFETl0vnua36e8hw6qjPZIwAhNQETKVVpjF4d00gE5VO9Cg");

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
