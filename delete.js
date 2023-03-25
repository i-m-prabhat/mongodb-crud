var mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    { id: Number, name: String, price: String, qty: Number, brand: String },
    { versionKey: false }
);

mongoose.connect("mongodb://0.0.0.0:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ProductModel = mongoose.model("Model", ProductSchema, "products");

//How to Delete the Record
//remove Method is deprecated, we can use deleteOne, deleteMany
ProductModel.deleteOne({ id: 1008 }, function (error, data)
{
    if (error == null)
    {
        console.log("Record Deleted");

    } else
    {
        console.log("Exception Occured...");
    }
    mongoose.disconnect();
});