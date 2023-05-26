const mongoose = require('mongoose');
exports.connect = async () => {
    console.log("connecting to DB");
    var response = await mongoose.connect(process.env.MONGODB_URL);
    if (response instanceof Error) {
        console.log(response);
    }
    else {
        console.log("connected to db");
    }
}