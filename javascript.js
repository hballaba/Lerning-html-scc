// alert("Hello World!");  /*всплывающее окно*/

function sayHi(name){
    console.log('Hi ' + name);
}

let num = 12;
// alert(num);
console.log(num);

let person = {
    name: 'Ivan',
    age: 38,

}
person.name = 'ivan';
console.log(person.name);
console.log(person['age']);

let color = ['red', 'yellow', 'green'];
console.log(color[2]);

sayHi(person.name);