// var fn;
// function foo() {
//     var a = 2;
//     function baz() {
//         console.log( a );
//     }
//     fn = baz;
// }
// function bar() {
//     fn();
// }
//
// foo();
// bar(); // 2

// function f() {
//
//
//
//     function b() {
//         console.log(1)
//     }
//     console.log(b());
//     var b = 0;
//     console.log(b);
// }
// f();

for (var i=1; i<=5; i++) { 
 
    function aa (i) {
        setTimeout( function timer() {
            console.log(i);
        }, i*1000 );
    }
	aa(i);
}