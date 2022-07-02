
function Person(name, lastName){
  this.name = name;
  this.lastName = lastName
}

Person.prototype.getName = function(){
  return this.name
}

Person.prototype.getLastName = function(){
  return this.name
}

let pamela = new Person('pamela', 'pereyra')
console.log(pamela.getName())

class Persona{
  constructor (name, lastName){
    this.name = name
    this.lastName = lastName
  }

  getName(){
    return this.name
  }
}

let pamela2 = new Persona('pamela2', 'pereyra')
console.log(pamela2.getName())


