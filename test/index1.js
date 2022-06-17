//How can we create objects

// const p1 = {
//   "name" : "Ansh",
//   "age" : 23
// };
// console.log(p1);
// p1.age = 24;

// console.log(p1);

// const p2 = {
//   "name" : "Divyan",
//   "age" : 21
// }
// console.log(p2);


// DRY

// const p1 = function person (name, age) {
//   this.name = name;
//   this.age = age;
//   this.tellYourBio = function tellYourBio() {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const ans = new p1("Jhon Doe", 25).tellYourBio();
// // console.log(ans)


// Inheritence

function CalculateArea(name) {
  this.name = name;
  this.getArea = function () {
    console.log(`Area of ${this.name} is ${this.length * this.breath}.`);
  }
}

function Circle(r) {
  this.length = 3.14*r;
  this.breath = r;
}
Circle.prototype = new CalculateArea("Circle");

function Rectangle(l, b) {
  this.length = l;
  this.breath = b;
}
Rectangle.prototype = new CalculateArea("Rectangle");

const circle = new Circle(10);
const rectangle = new Rectangle(2, 4);
circle.getArea();
rectangle.getArea();


class A {
  static s
}