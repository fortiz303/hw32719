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

let myPet = new Animal('Alex','123 Bernal Heights', 'Francisco', '01.08.2002');

console.log(myPet.petName);
petName.play();

console.log(petName.play());
