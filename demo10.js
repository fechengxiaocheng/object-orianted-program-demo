// 对象深拷贝

const Chinese = {
    name: '中国',
    type: [1,2,3]
};

function deepClone(data) {
    let obj;
    if (data instanceof Array) {
        obj = [];
        for (let i = 0; i < data.length; i++) {
            obj.push(deepClone(data[i]));
        }
    }
    else if (data instanceof Object) {
        obj = {};
        for(let i in data) {
            obj[i] = deepClone(data[i]);
        }
    }
    else {
        return data
    }
    return obj;
}

const Doctor = deepClone(Chinese);
Doctor.type.push(4);
console.log(Doctor, Chinese);