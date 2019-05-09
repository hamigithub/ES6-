//引入依赖模块
import {a, b} from './5.js'

const sum = () => {
    console.log(a + b);
    return a + b;
};

const show = () => {
    console.log('执行了!');
    return 1
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        return `我的名字是${this.name}`;
    }
}

export {
    a,
    b,
    sum,
    show
}

export default {
    Person
}