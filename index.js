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
  constructor(breakfast) {
    this.breakfast = breakfast;
  }
}

class Lunch {
  constructor(lunch) {
    this.lunch = lunch;
  }
}

class Dinner {
  constructor(dinner) {
    this.dinner = dinner;
  }
}

const breakfast = new Breakfast('eggs');
const lunch = new Lunch('side salad');
const dinner = new Dinner('balsamic salad');