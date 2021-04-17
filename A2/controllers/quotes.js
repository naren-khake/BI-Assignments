import {Quote} from '../models/quote.js' // import model

//To add Quote
export const addQuote = (req,res) =>
{
    const quotes= new Quote(
        {
            quote : req.body.quote,
            author : req.body.author
        }
    )
    quotes.save()
    .then( (result)=>{  res.send('{"result" : "Success" }') } )
    .catch( (err)=>{  console.log(err)} )

}


//To Display all Quotes in database
export const getQuote = (req,res) =>
{
    Quote.aggregate(
        [{$sort:{author:1} }]
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