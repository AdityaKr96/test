const express=require("express");
const app=express();
let n=0;
app.use(express.json());

 const user=[
    {
        userName : "lol",
        age : 35,
        vegs :// use array object [{   }]
        [{
            carrots : 5,
            raddish : 4
        }]
    }
 ]
app.get("/",function(req,res){
    //n = req.query.n;
    //const vegsObj=user[0].vegs
    let totalCarrots=0;
    for(let i=0;i<user[0].vegs.length;i++)
        {
            totalCarrots+=user[0].vegs[i].carrots;
                }
    //res.send("value is "+n);//u can use only 1 at a time
    res.json(
        { 
            totalCarrots
        }
    )

})

app.post("/",function(req,res){
    const carrots = req.body.carrots
    user[0].vegs.push({
        carrots : carrots
    });// this function does not update 
       //the value but instance add another object in array
       const a=user[0].vegs;
    res.json({
        a,
        msg:"done"
    })
})

app.put("/",function(req,res){
   
    for(let i=0;i<user[0].vegs.length;i++)
        {
            user[0].vegs[i].carrots=n;
                }
    const newCarrots=user[0].vegs.carrots;
    //res.send("value is "+n);//u can use only 1 at a time
    res.json(
        { 
            msg : "ok",
            newCarrots
        }
    )


})
app.delete("/",function(req,res){
    let temp=[];
    for()

});

console.log("test1");
app.listen(3000);