// Variabler
var str = 'Hello world';
var num = 42;
var bool = true;
// Klass med minst en metod
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return Person;
}());
// Enums
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
// run-code
var person = new Person('Alice');
var dog = {
    name: 'Lassy',
    age: 3,
    speak: function () {
        return 'Woof!';
    }
};
var output = document.getElementById('output');
output.innerHTML += Color.Red + '<br>';
output.innerHTML += str + num + bool + '<br>';
output.innerHTML += person.sayHello() + '<br>';
output.innerHTML += dog.name + '<br>';
