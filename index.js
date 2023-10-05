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
    #amount;
    constructor(breakfast, lunch, dinner) {
      this.breakfast = breakfast;
      this.lunch = lunch;
      this.dinner = dinner;
      this.#amount = 0; // Assign a default value if needed
    }
  }
  
   class Lunch {
    // Define the Lunch class
   }

   class Dinner {
    //Define the Dinner class
   }