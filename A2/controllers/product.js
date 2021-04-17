import {Product} from '../models/product.js' //import model


// to add products
export const addProduct = (req,res) =>
{
    const product  = new Product(
        {
            productName : req.body.productName,
            price : req.body.price
        }
    )
    product.save()
    .then( (result)=>{  res.send('{"result" : "Success" }') } )
    .catch( (err)=>{  console.log(err)} )
}


//To Display all product in database
export const getProduct = (req,res) =>
{
    Product.aggregate(
        [{$sort:{price:1} }]
    )
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}