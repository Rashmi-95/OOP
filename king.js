let Person = require('./person.js');

class King extends Person {
  constructor(name,age) {
    super(name,age);
  }
  introduction() {
      console.log(`I am king ${this.name}, ruler of the kingdom`);
  }
}
var king =  new King('Akbar', 40)
king.introduction();