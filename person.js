class person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  introduction() {
    console.log('Hi!, I am ',this.name);
  }
}
module.exports = person