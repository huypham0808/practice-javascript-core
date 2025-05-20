function theFirt(callback) {
    setTimeout(function () {
        console.log("theFirt");
        callback();
    }, 1000)
};
function theSecond() {
    console.log("theSecond");
};

// theFirt(theSecond);

//Xử lý bất đồng bộ => Cho đồng bộ trở lại
//CACH 1: CallbackFunction (Hàm có tham số là 1 hàm khác)

/**2025-05-19 - PRACTICE JAVASCRIPT CORE */
const changeStyle = () => {
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "blue";
    document.getElementById("demo").style.fontSize = "30px";
}

const lightSetting = (action) => {
    let bulb = './assets/light-bulb-2.jpg';
    if (action === 'on') {
        bulb = './assets/light-bulb-1.jpg';
    }
    document.getElementById('bulb').src = bulb;
}

/**khai báo biến bằng var:
 * sẽ được đẩy lên đầu phạm vi khối (scope block)
 * được khởi tạo giá trị mặc định là undifined
 * => có thể sử dụng trước khi khai báo mà không bị lỗi.
 */

a = 12;
var a;
console.log(a); //không bị lỗi => trả về 12

console.log(d); //không bị lỗi => trả về undifined
var d = 3; 
// b = 14;
// let b;
// console.log(b); // lỗi

// c = 15;
// const c = 13;
// console.log(c); // lỗi
let e = 12;
console.log(typeof e);
