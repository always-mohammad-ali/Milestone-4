const burgerPrice = 200;

let totalBurger = 2;

if(burgerPrice*totalBurger>500){
    console.log("You will get a free coke!");
}
else{
    console.log("You need to pay = ", burgerPrice*totalBurger+30);
}