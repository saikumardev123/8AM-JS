var ProductModel = require('../models/product.model');

exports.add = async (req, res) => {
    var product = req.body;
    var ProductModelObject = new ProductModel(product);
    try {
        var response = await ProductModelObject.save(product);
        if (response instanceof Error) {
            res.status(500).send({
                statusCode: 500,
                message: "adding product failed"
            })
        }
        else {
            res.status(201).send({
                statusCode: 201,
                message: "product added successfully"
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

exports.all = async (req, res) => {
    var response = await ProductModel.find({});
    res.send(response);
}

exports.delete = async (req, res) => {
    var productId = req.params.id;
    var response = await ProductModel.findOneAndDelete({ "productId": productId });

    if (response == null) {

        res.status(500).send(
            { statusCode: 500, message: "unable to delete" }
        )

    }
    else {

        res.status(200).send(
            { statusCode: 200, message: "successfully deleted" }
        )

    }


}

exports.singleProduct = async (req, res) => {
    var productId = req.params.id;
    var response = await ProductModel.findOne({ "productId": productId });

    if (response == null) {

        res.status(404).send(
            { statusCode: 404, message: "product not found" }
        )

    }
    else {
        res.status(200).send(
            { statusCode: 200, message: "successfully retrieved", product: response }
        )

    }

}
exports.update = async (req, res) => {
    var productId = req.params.id;
    var body = req.body;
    var response = await ProductModel.findOneAndUpdate({ "productId": productId }, body);
    if (response == null) {
        res.status(404).send(
            { statusCode: 404, message: "product not found" }
        )

    }
    else {
        res.status(200).send(
            { statusCode: 200, message: "updated successfully" }
        )

    }

}
