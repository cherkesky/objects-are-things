// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const myPet = {
  name: "Laika",
  species: "Dog",
  nicknames: ["Lulu","Lucifer","Creeper"],
  age: 2,
// edited from here for part 2
  bark: function () {
    window.alert("Woof Woof!");
  },
  whine: function () {
    window.alert("Ouuuuuuuuuuummm...");
  },
  pant: function () {
    window.alert("Foooooooof.....");
  },
      // edited from here for part 3
  favoriteToys: [],
  play: function (toy) {
    let rnd = Math.floor(Math.random() * Math.floor(2));
    //testing the rnd
    console.log(rnd);
    if (rnd === 0) //disliked the toy 
    {
      console.log ("Disliked");
    } else { // liked the toy
      this.favoriteToys.push(toy);
    }
  }
};

// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()

// myPet.bark();
// myPet.whine();
// myPet.pant();

myPet.play("Squeeky Toy");
console.log(myPet.favoriteToys);