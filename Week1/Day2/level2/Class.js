class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() { // Static method are associate with class it self
    console.log("Anmial");
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
}
Animal.myType(); // That Why its call using className without create any object
let dog = new Animal("dog", 4, "bhow bhow"); //create object
let cat = new Animal("cat", 4, "meow");
cat.speak(); // call function on object
