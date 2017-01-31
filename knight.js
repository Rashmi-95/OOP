let Person = require('./person.js');

class Knight extends Person {
  constructor(name,age) {
    super(name,age);
  }
  introduction() {
       console.log(`I am ser ${this.name}`);
  }
}
var knight= new Knight ('Alibaba', 30)
knight.introduction();