class Animal{
  constructor(name){
    this.name = name
  }

  makeNoise(){
   console.log("Algum som genérico do animal");
     
  }
}

class Dog extends Animal{

}
const dog = new Dog("Caramelo")
console.log(dog.name);
dog.makeNoise()

class Cat extends Animal{

}

const cat = new Cat
cat.makeNoise()
