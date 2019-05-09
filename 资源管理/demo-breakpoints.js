// function f() {
//     console.log(this.a);
// }
//
// var obj = {
//     a: 20
// };
//
// f.call(obj);
//
// f();
//
// f.apply(obj);
// f();
//
// function f(num1, num2) {
//     console.log(this.a);
//     console.log(num1, num2);
// }
//
// var obj = {
//     a: 20,
// };
//
// f.call(obj, 50, 10);
// f.apply(obj, [50, 10]);

//使用call方法，将类数组转化成数组类型
// function exam(a, b, c, d, e) {
//     console.log(arguments);
//     var arg = [].slice.call(arguments);
//     console.log(arg);
// }
//
// exam(2, 8, 4, 9, 5);

// 也常常使用该方法将DOM中的nodelist转换为数组
// [].slice.call( document.getElementsByTagName('li') );

//根据自己的需要灵活修改this指向
// var foo = {
//     name: 'hami',
//     showName: function () {
//         console.log(this.name);
//     }
// };
//
// var bar = {
//     name: 'rose'
// };
//
// foo.showName.call(bar);

//实现继承
// var Person = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.gender = ['man', 'woman'];
// };
//
// var Student = function (name, age, high) {
//     //use call
//     Person.call(this, name, age);
//     this.high = high;
// };
//
// Student.prototype.message = function () {
//     console.log(this.name, this.age, this.high, this.gender[0])
// };
//
// new Student('xiaoming', 12, '150cm').message();

// 在向其他执行上下文的传递中，确保this的指向保持不变
// var obj = {
//     a: 12,
//     getA: function () {
//         var self = this;
//         window.setTimeout(function () {
//             console.log(self.a);
//         }, 1000)
//     }
// };
// obj.getA();//12

// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     }
// }
//
// var obj = {
//     a: 20,
//     getA: function () {
//         setTimeout(bind(function () {
//             console.log(this.a)
//         }, this), 1000);
//     }
// };
// obj.getA();

var obj = {
    a: 20,
    getA: function () {
        setTimeout(function () {
            console.log(this.a)
        }.bind(this), 1000)
    }
};
obj.getA();