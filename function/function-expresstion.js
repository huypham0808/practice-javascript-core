//Hàm biểu thức: gán hàm cho một biến

const sayHello = function(a, b){
     return a + b;
}
const sayHello2 = function(c,d){
     return c + d;
}
const result1 = sayHello(1,2);
const result2 = sayHello2(3,4);
const result = result1 + result2;
console.log("Result: ", result);
