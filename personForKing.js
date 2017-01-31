const person = function (name, age, designation) {
  this.name = name;
  this.age = age;
  this.designation = designation;
};

person.prototype.intro = function introduction() {
  if (this.designation === undefined)
    console.log('Hi!, I am ', this.name);
  else if (this.designation === 'King')
    console.log(`I am king ${this.name}, ruler of the kingdom`);
  else if (this.designation === 'knight')
    console.log(`I am ser ${this.name}`);
};

module.exports = person
