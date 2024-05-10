function promisifiedSetTimeout()
{
    let p = new Promise(function(resolve)
{
    setTimeout(function(){resolve("hi there")},2000);
})
return p;
}

async function doSomething()
{
    const value = await promisifiedSetTimeout();
    console.log(value);
    
    promisifiedSetTimeout().then(function(value){
        console.log(value);});
}


console.log("start");
doSomething();