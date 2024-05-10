const arr=[1,2,3,4,5];
const newArr=arr.map(function(i){return i*2});
console.log(newArr);
const evenArr=arr.filter(function(n){
    if(n%2==0)
        return n;
    else return ;
});
console.log(evenArr);

