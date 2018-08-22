// 非构造函数继承-object方法

const Chinese = {
    name: '中国'
};

function create(o) {
    const F = function() {};
    F.prototype = o;
    return new F();
}

const Doctor = create(Chinese);

console.log(Doctor.name);
