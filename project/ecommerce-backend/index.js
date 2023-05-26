const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const db = require('./utils/db');
const Razorpay = require('razorpay');
const UserRouter = require('./routes/user.route');
const ProductRouter = require('./routes/product.route');
dotenv.config();
//db.connect();
app.use(cors());
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
const razorpayInstance = new Razorpay({
    key_id: "rzp_test_yNwTLapO6BFmov",
    key_secret: "Sj1MHQWiQlg4ruiBKXSorX82"
});
app.post('/createOrder', (req, res) => {
    // STEP 1:
    const { amount, currency, receipt } = req.body;

    // STEP 2:    
    razorpayInstance.orders.create({ amount, currency, receipt },
        (err, order) => {

            //STEP 3 & 4: 
            if (!err)
                res.json(order)
            else
                res.send(err);
        }
    )
});

app.listen(process.env.PORT_NO, () => {
    console.log("The server running on PORT", process.env.PORT_NO)
});

/*

{
    "id": "order_LrQjRiw2sNfKDN",
    "entity": "order",
    "amount": 19000,
    "amount_paid": 0,
    "amount_due": 19000,
    "currency": "INR",
    "receipt": null,
    "offer_id": null,
    "status": "created",
    "attempts": 0,
    "notes": [],
    "created_at": 1684479386
}

*/