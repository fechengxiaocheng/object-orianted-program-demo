// 继承-prototype模式

function Animal(obj) {
    this.type = '动物';
}
Animal.prototype.eat = () => {console.log('eat...')};

function Cat(obj) {
    this.name = obj.name;
    this.age = obj.age;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

const cat1 = new Cat({name: 'a', age: 'aaa'});
cat1.eat();
console.log('demo4...', cat1.type);
console.log(Cat.prototype.constructor);