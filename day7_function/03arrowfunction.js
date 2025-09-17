function num(a)
{
    let c = a**2;
    return c;
}
let ans = num(5);
console.log(ans);


//normal function
function getExp(x,y)
{
    let ans = x**y;
    return ans;
}
console.log(getExp(2,3));

//variable function

let getExp2 = function(x,y)
{
    let ans = x**y;
    return ans;
}
console.log(getExp2(3,3));

//arrow function //SIMPLE remove fucntion and add =>

let getExp3 = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp3(3,3));

