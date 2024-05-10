const express=require("express");
const app=express();
app.use(express.json());

const vegs=[{tomato:[{good:7,bad:4}],potato:[{good:5,bad:8}]}];

app.get("/",function(req,res)
{
    let total=0;
    for(let i=0;i<vegs[0].tomato.length;i++)
        {
            total+=vegs[0].tomato[i].good;
        }
    res.json({total});

})

app.put("/",function(req,res){
    const n=req.query.n;
   
    for(let i=0;i<vegs[0].tomato.length;i++)
        {
            vegs[0].tomato[i].good=n;
                }
    const update=vegs[0].tomato;
    //res.send("value is "+n);//u can use only 1 at a time
    res.json(
        { 
            n,
            msg : "ok",
            update
        }
    )
})

app.post("/",function(req,res){
    const ok = req.body.ok
    vegs[0].tomato.push({//vegs[0].tomato[0] is wrong as u cannot 
                        //take object but only array vegs[0].tomato
        ok : ok 
    });// this function does not update 
       //the value but instance add another object in array
       const a=vegs[0].tomato;
    res.json({
        a,
        msg:"done"
    })

})
app.delete("/",function(req,res){
    const temp=[];
    for(let i=0;i<vegs[0].tomato.length;i++)
        {
            temp.push(
                {
                    good : 0
                }
            )
        }
    vegs[0].tomato=temp;
    res.json(
        { msg:"deleted"}
    )
})

console.log("test2");
app.listen(3002);
