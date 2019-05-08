// ES6
class Parent {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  static sayHello() {
    console.log('hello')
  }
  sayName() {
    console.log('my name is ' + this.name)
    return this.name
  }
}
class Child extends Parent {
  constructor(name, age, sex) {
    super(name, sex)
    this.age = age
  }
  sayAge() {
    console.log('my age is ' + this.age)
    return this.age
  }
}
let parent = new Parent('Parent', 'man')
let child = new Child('Child', 18, 'manman')
console.log('parentsex:', parent.sex)
console.log('childsex:', child.sex)
console.log('parent: ', parent) // parent:  Parent {name: "Parent"}
Parent.sayHello() // hello
parent.sayName() // my name is Parent
console.log('child: ', child) // child:  Child {name: "Child", age: 18}
Child.sayHello() // hello
child.sayName() // my name is Child
child.sayAge() // my age is 18
let a = new Map()
a.set('name', 'xcy')
console.log(a, a.get('name'))
console.log(a, a.has('name'))

let b = new Set()
console.log(b)
b.add('age')
console.log(b, b.has('age'), b.size)
console.log(Array.from(b))
console.log([...b])

function Nn() {
  this.name = 1
}
Nn.prototype.age = function() {
  console.log(this.name)
}

function Nnn() {
  Nn.call(this)
}
var nn = new Nnn()
console.log(nn)
export default {
  Parent,
  Child
}
