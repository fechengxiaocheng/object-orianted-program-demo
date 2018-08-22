// 自己实现new对象函数

// 在new的过程中，对象添加_proto_属性，并且链接到构造函数的原型上。

// 1、创建一个对象
// 2、添加_proto_属性
// 3、链接到构造函数上
// 4、返回这个对象


function create() {
    // 创建一个空的对象
    let obj = new Object()
    console.log('arguments...', arguments);
    // 获得构造函数
    let Con = [].shift.call(arguments)
    console.log('Con...', Con);
    // 链接到原型
	obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}

const a = create('111');
console.log(a);