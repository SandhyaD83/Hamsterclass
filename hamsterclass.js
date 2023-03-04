/* 1. Classes Methods and Properties
Create Following classes and properties

Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price */


class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak")
  }
  eatFood() {
    console.log("nibble,nibble")
  }
  getPrice() {
    console.log(this.price)
  }
}

let animal = new Hamster("Hammy");
console.log(animal);
animal.wheelRun();
animal.eatFood();
animal.getPrice();

/*2.Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())*/

class Person {
  constructor(name) {
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log("hello" + " " + this.name);
  }
  eat() {
    this.weight += 1;
    this.mood += 1;
  }
  exercise() {
    this.weight -= 2;
  }
  ageUp() {
    this.age += 1;
    this.height += 1;
    this.weight += 1;
    this.mood -= 1;
    this.bankAccount += 10;

  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= animal.getPrice();

  }
}
const person1 = new Person("John");
console.log(person1);
person1.getAge();
person1.getWeight();
person1.greet();
person1.buyHamster("Fluffy");
/* 3.Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice*/
const person2 = new Person("Timmy");
person2.getAge(5)
person2.eat();
person2.eat();
person2.eat();
person2.eat();
person2.eat();
person2.exercise();
person2.exercise();
person2.exercise();
person2.exercise();
person2.exercise();
person2.getAge(9)
person2.buyHamster("Gus")
person2.getAge(15)
person2.eat();
person2.eat();
person2.exercise();
person2.exercise();
