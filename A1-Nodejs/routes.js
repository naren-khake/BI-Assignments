import url from "url"
import {findage,findmetric,findveggie} from "./controller.js"      


export const myfunc=(req,res)=>
{

res.writeHead(200,{"Content-Types":"text/html"})
const queryObject = url.parse(req.url,true).query;
console.log(queryObject);
var route=url.parse(req.url,true).pathname;

//routes 

if( route=== "/age")
{
    findage(req,res,queryObject)        
}

else if(route === "/metrics")
{
    findmetric(req,res,queryObject)
}

else if( route=== "/vegetables")
{
    findveggie(req,res,queryObject)
}



// error message
else
{
    res.writeHead(404,{"Content-Types":"text/html"})
    res.write("<h1>404 page not found</h1>")
    res.end();
}
}