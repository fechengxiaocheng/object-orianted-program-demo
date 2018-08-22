// 构造函数模式

function Cat(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.type = '猫科';
    this.eat = () => {console.log('eat...')};
}
const cat1 = new Cat({name: 'a', age: 'aaa'});
const cat2 = new Cat({name: 'b', age: 'bbb'});

console.log(cat1, cat2);
console.log(cat1.eat == cat2.eat);