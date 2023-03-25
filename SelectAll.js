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
//find : Array : Collection Object
//findOne : Object

ProductModel.find({}, function (error, data)
{

    if (error == null)
    {
        if (typeof (data) == 'object')
        {
            if (Array.isArray(data))
            {
                // console.log("Data is Array of Object ");

                for (let i in data)
                {

                    console.log(` The Product Id : ${data[i].id} `);
                    console.log(` The Product Name : ${data[i].name} `);
                    console.log(` The Product Quantity : ${data[i].qty} `);
                    console.log(`------------`);
                }

            } else
            {
                // console.log("Data is Object");

            }
        }
    } else
    {
        console.log("Exception or Error Occured");
    }

    mongoose.disconnect();
});