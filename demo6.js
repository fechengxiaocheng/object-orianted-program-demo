// 继承-空对象
function extend(Sub, Parent) {
    const F = function() {};
    F.prototype = Parent.prototype;
    Sub.prototype = new F();
    Sub.prototype.constructor = Sub;
}

function Animal(obj) {
}
Animal.prototype.type = '动物';
Animal.prototype.eat = () => {console.log('eat...')};

function Cat(obj) {
    this.name = obj.name;
    this.age = obj.age;
}

extend(Cat, Animal);

const cat1 = new Cat({name: 'a', age: 'aaa'});
cat1.eat();
console.log(Cat.prototype.constructor, Animal.prototype.constructor);
