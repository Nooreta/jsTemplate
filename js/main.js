function calcProduct(price,profit,taxes,marketing)
{
    var result1=price*profit;
    var result2=result1*taxes;
    var result3=result2*marketing;
    document.write(result3);
}

calcProduct(200,10,1.5,2);

function welcome(name)
{
window.alert("Welcome" + name);
}
var name=window.prompt("Please enter u're name");
welcome(name);
welcome("Noor");

function calcProd(x,y)
{
    var result=x*y;
    document.write(" ");
    document.write(result);
}
calcProd(2,3);

function sum(x,y)
{
    return x+y;
}
console.log(sum(2,3));
var avg=sum(2,3)/2;
console.log(avg);
if(avg>10)
{
console.log("Welcome");
}
for(var i=0;i<avg;i++)
{
    console.log("Hello");
}
function calcSum(x,y)
{
    result=x+y;
    result2=x++;
    return result;
    return result2;
}
console.log(calcSum(10,20)/2);
//declaration function 
//Expression function
var printHello=function(name)
{
    window.alert("Hello"+" "+name)
} //expression function
printHello("Nooreta");

//Hoisting
//var p;
console.log(p); //undefined
var p=10;

test("Noor");
function test(userName)
{
    console.log("User name is: "+userName);
}//declaration function بنعمله hoisting
/*test2("Ali");
var test2=function(name)
{
    console.log("The user name is: "+name);
}  expression function doesn't allow hoisting*/

