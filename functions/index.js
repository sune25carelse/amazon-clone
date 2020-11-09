const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HkCvdAwO5k8JQnLUdWZVrBTXhefuhUMDzEymIQRw1pcWTL6FrQTB9ADGXkmbQ158rf4kiD9VFKautowoDCeNEd700E1eDNbEj');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,   //subunits of the currency 
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command 
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-8dfc1/us-central1/api