class Animal{
  constructor(name){
    this.name = name
  }

  makeNoise(){
   console.log("Algum som genérico do animal");
     
  }
}

class Dog extends Animal{
  makeNoise(){
    console.log("Au Au..."); 
  }
}
const dog = new Dog("Caramelo")
console.log(dog.name);
dog.makeNoise()


class Cat extends Animal{
    makeNoise(){
    console.log("Miau Miau..."); 
  }
}

const cat = new Cat
cat.makeNoise()
