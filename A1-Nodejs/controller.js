import fs from "fs"                        // for file system


//for finding age
export const findage=(req,res,q)=>
{
    var dmy=new Date()                    //get current date
    var d=dmy.getDate();                 //extract day
    var m=dmy.getMonth() +1 ;           //extract month
    var y=dmy.getFullYear();           //extract year
    var age= y - q.year 

    if(m < q.month)
        age--;
    else if(m==q.month)
        {
            if(d < q.date)
                age--;
        }

        
    res.write("<p>Hello "+q.name+"</p> <p>You are currently "+age+" years old</p>")
    res.end();
}


//for finding area, volume and surface area
export const findmetric= (req,res,q)=>
{
    const PI=3.141592653589793238;
    var output=-1;
    var object=q.object;
    var metric=q.metric;
    var radius=q.radius;
    if(object == "sphere" && metric == "volume")
    {
        output= (4/3) * PI * radius * radius * radius;
    }
    else if(object == "sphere" && metric == "surfacearea")
    {
        output= 4 * PI * radius * radius;
    }
    else if(object == "circle" && metric == "area")
    {
        output= PI * radius * radius;
    }
    if(output!=-1)
        res.write("<p>"+metric+" of "+object+" is "+output+"</p>")
    res.end();

}


//for vegetables
export const findveggie = (req,res,q) =>
{
    var veg=(fs.readFileSync('./veg.json', {encoding:'utf8', flag:'r'}));
    console.log(veg);
    res.writeHead(200,{"Content-Types":"text/html"})
    res.write("<p>"+veg+"</p>")
    res.end();
}