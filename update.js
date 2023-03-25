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

ProductModel.findOne({ id: 1007 }, function (error, data)
{
    if (error == null)
    {
        if (typeof (data) == 'object')
        {

            if (Array.isArray(data))
            {
                // console.log("Data is Array of Object ");

            } else
            {
                // console.log("Data is Object");

                // console.log(` The Product Id : ${data.id} `);
                // console.log(` The Product Name : ${data.name} `);
                // console.log(` The Product Quantity : ${data.qty} `);

                //Once record is found we will be updating the Record.
                // Data Object : New Value Overwrite;
                // data.id = "1006";
                // data.name = "Kurkure";
                // data.qty = "100";
                // data.brand = "NA"

                console.log(` The Product Id : ${data.id} `);
                console.log(` The Product Name : ${data.name} `);
                console.log(` The Product Quantity : ${data.qty} `);
                console.log(` The Product Brand : ${data.brand} `);
                //to the local Memory 
                //if you want to commit to the Model

                data.save(function (err)
                {
                    if (err == null)
                    {
                        console.log("Updated Successfully");

                    }
                    mongoose.disconnect();
                });


            }
        }
    } else
    {
        console.log("Exception or Error Occured");
    }
});