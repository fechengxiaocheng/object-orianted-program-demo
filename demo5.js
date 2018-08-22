// 原型链直接继承

function Animal(obj) {
}
Animal.prototype.type = '动物';
Animal.prototype.eat = () => {console.log('eat...')};

function Cat(obj) {
    this.name = obj.name;
    this.age = obj.age;
}

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

const cat1 = new Cat({name: 'a', age: 'aaa'});
cat1.eat();
console.log(Cat.prototype.constructor, Animal.prototype.constructor);
