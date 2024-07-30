function person(name,age){
    this.name = name;
    this.age = age;
}
const obj = new person("Sudhansh","19");
console.log(obj.name);
console.log(obj.age);