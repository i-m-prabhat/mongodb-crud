var mongoose = require("mongoose");
var CT = require("console");
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
                let table = [];

                for (let i in data)
                {
                    table.push({ "Product ID": data[i].id });
                    table.push({ "Product Name": data[i].name });
                    table.push({ "Product Price": data[i].price });
                    table.push({ "Product Quantity": data[i].qty });
                    table.push({ "Product Brand": data[i].brand });
                }

                //console.log(table);
                console.log("The Data in tabular Format")
                // console.table(table);
                CT.table(table);
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