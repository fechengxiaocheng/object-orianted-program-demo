// 对象浅拷贝

const Chinese = {
    name: '中国',
    type: [1,2,3]
};

function create(o) {
    let obj = {};
    for(let i in o) {
        obj[i] = o[i]
    }
    return obj;
}

const Doctor = create(Chinese);
Doctor.type.push(4);
console.log(Doctor, Chinese);