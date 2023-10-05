class Dog {
    constructor(name, breed) {
        this.nname = name;
        this.breed = breed;
    }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

bigFluffyDog1; // => Dog { name: 'Buzz', breed: 'greatPyrenees' }
bigFluffyDog2; // => Dog { name:  'Woody' , breed: 'labrador' . }

class Breakfast {
  constructor(food, drink) {
    this.breakfast = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.dessert = dessert;
  }
}

console.log(breakfast);
console.log(lunch);
console.log(dinner);