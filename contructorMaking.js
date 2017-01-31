const person = function(name, age){
  this.name = name;
  this.age = age;
};

person.prototype.intro = function introduction(){
  console.log('Hi!, I am ',this.name);
};

const John = new person('John', '32');
John.intro();
