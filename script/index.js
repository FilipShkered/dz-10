function Hamburger(size) {
  this.size = size;
  this.toppings = [];
  
}

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}

Hamburger.prototype.getPrice = function () {
  let totalPrice = this.size.price;
  this.toppings.forEach(topping => {
    totalPrice += topping.price;
  });
  return totalPrice;

}

Hamburger.prototype.getCalories = function () {
  let totalCalories = this.size.calories;
  this.toppings.forEach(topping => {
    totalCalories += topping.calories;
  });
  return totalCalories;
}

Hamburger.prototype.payBy = function () {
  
  if (this.getPrice() < 150) {
    return 'Cash';
  } else {
    return 'Card';
  }
    
}

Hamburger.SIZE_S = {
  price: 50,
  calories: 20,
}

Hamburger.SIZE_M = {
  price: 75,
  calories: 30,
}

Hamburger.SIZE_L = {
  price: 100,
  calories: 40,
}

Hamburger.TOPPING_CHEESE = {
  price: 10,
  calories: 20,
}

Hamburger.TOPPING_SALAD = {
  price: 20,
  calories: 5,
}

Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10,
}

Hamburger.TOPPING_SPICE = {
  price: 15,
  calories: 0,
}

Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 5,
}


const hamburger = new Hamburger(Hamburger.SIZE_M);


hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());
console.log('Pay by: ' + hamburger.payBy());
