import mongoose from "mongoose"
const Schema=mongoose.Schema;

const quoteSchema= new Schema(
    {
        quote : {type:String , required:true},
        author : {type:String , required:true}
    }
)

export const Quote =mongoose.model('Quote',quoteSchema)