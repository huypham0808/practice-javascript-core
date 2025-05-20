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

/**2025-05-19 - LEARNING JAVASCRIPT CORE */
const test = () => {
    console.log(123);
}
test();

const changeStyle = () => {
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "blue";
    document.getElementById("demo").style.fontSize = "30px";
}