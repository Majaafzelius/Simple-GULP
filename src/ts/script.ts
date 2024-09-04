// Variabler
let str = 'Hello world';
let num = 42;
let bool = true;

// Klass med minst en metod
class Person {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      return `Hello, my name is ${this.name}`;
    }
  }

// Interface
interface Animal {
  name: string;
  age: number;
  speak: () => void;
}

// Enums
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
  }


// run-code
const person = new Person('Alice');


const dog: Animal = {
    name: 'Lassy',
    age: 3,
    speak: () => {
      return 'Woof!';
    },
  };

const output = document.getElementById('output');
output.innerHTML += Color.Red + '<br>';
output.innerHTML += str + num + bool + '<br>';
output.innerHTML += person.sayHello() + '<br>';
output.innerHTML += dog.name + '<br>';
