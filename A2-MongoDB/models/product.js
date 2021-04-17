import mongoose from "mongoose"
const Schema = mongoose.Schema;

//Model for Product
const productSchema = new Schema(
    {
        productName:{type:String , required : true},
        price:{type:String , required : true}
    }
)

export const Product= mongoose.model('Product',productSchema)
