// 继承-拷贝
function extend(Sub, Parent) {
    for (let i in Parent.prototype) {
        console.log(i);
        Sub.prototype[i] = Parent.prototype[i];
    }
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
