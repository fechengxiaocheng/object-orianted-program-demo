// 继承-构造函数绑定
function Animal(obj) {
    this.type = '动物';
}

function Cat(obj) {
    Animal.apply(this, arguments);
    this.name = obj.name;
    this.age = obj.age;
}

const cat1 = new Cat({name: 'a', age: 'aaa'});
console.log(cat1.type);