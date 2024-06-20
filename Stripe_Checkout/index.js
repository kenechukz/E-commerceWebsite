require('dotenv').config()
const cors = require('cors')
const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app  = express()

app.use( 
    cors({
        origin: "*"     
    })
)

app.use(express.json()); // Add this middleware to parse JSON bodies

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/checkout', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: 'Node.js and Express Book'
                        },
                        unit_amount: 50 * 100
                    },
                    quantity: 1
                }
            ],
            mode: 'payment',
            shipping_address_collection: {
                allowed_countries: ['US', 'BR']
            },
            success_url: `${process.env.CLIENT_URL}/checkout.html`,
            cancel_url: `${process.env.CLIENT_URL}/basket.html`,
        });
        res.json({ url: session.url }); // Send the session URL back to the client
    }
     catch (error) {
        res.status(500).json({ error: error.message });
    }
});





app.get('/complete', (req, res) =>{
    res.send('Your payment was successful')
} )

app.get('/cancel', (req, res) =>{
    res.redirect('/')
} )

app.listen(3001, () => console.log('Server started on port 3001'))