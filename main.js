function theFirt(callback) {
    setTimeout(function(){
        console.log("theFirt");
        callback();
    }, 1000)
};
function theSecond () {
    console.log("theSecond");
};

theFirt(theSecond);

//Xử lý bất đồng bộ => Cho đồng bộ trở lại
//CACH 1: CallbackFunction (Hàm có tham số là 1 hàm khác)