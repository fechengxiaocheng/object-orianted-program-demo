// 原型模式

function Cat(obj) {
    this.name = obj.name;
    this.age = obj.age;
}

Cat.prototype.type = '猫科';
Cat.prototype.eat = () => {console.log('eat...')};

const cat1 = new Cat({name: 'a', age: 'aaa'});
const cat2 = new Cat({name: 'b', age: 'bbb'});

// console.log(cat1, cat2);
// console.log(cat1.eat == cat2.eat);
console.log(cat1.hasOwnProperty('name'));
console.log(cat1.hasOwnProperty('type'));

console.log(Cat.prototype.isPrototypeOf(cat1));
console.log(Cat.prototype.isPrototypeOf(cat2));

console.log('name' in cat1);
console.log('type' in cat2);
