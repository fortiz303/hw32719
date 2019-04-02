class Animal{
  constructor(nameOfPet,address,owner,age){
    this.petId = Math.random() * 100000;
    this.petName = nameOfPet;
    this.address = address;
    this.owner = owner;
    this.age = age;
  }

  play() {
    console.log(this.petName + 'plays for a few minutes');
  };
  barks() {
    console.log(this.petName + 'barks wildly');
  }
  runs() {
    console.log(this.petName + 'runs uncontrollably');
  }
  home() {
    console.log(this.petName + 'lives in' + this.address);
  }
  old() {
    console.log(this.petName + 'is' this.age + 'years old');
  }

}
class Dog extends Animal {
  constructor(loyalty, petName, adress, owner, age){
    super(petName, adress, owner, age);
    this.loyalty = 0;
  }

//METHOD OVERRIDING
  play() {
    if (this.energy <= 0 ){
      console.log(this.petName + ' is too tired to play');
      console.log('Energy level is ' + this.energy)
    } else {
      console.log(this.petName + ' fetches for a few minutes');
      this.energy = this.energy - 100;
      this.loyalty = this.loyalty + 100;
      console.log('Energy level is ' + this.energy)
    }
    bark() {
      console.log(this.petName + 'barks at evey1 in the hood');
    }
  }



let myPet = new Animal('Alex','123 Bernal Heights', 'Francisco', '01.08.2002');
let myDog = new Dog('batman','123 bernal','eduardo',6)

console.log(myPet.petName);
petName.play();

console.log(petName.play());
