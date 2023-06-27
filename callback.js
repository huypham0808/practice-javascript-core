//Tinh dien tich hinh thang: (a+b)*h/2
//Xử lý bất đồng bộ => Cho đồng bộ trở lại
//CACH 1: CallbackFunction (Hàm có tham số là 1 hàm khác)

function apiCong(a, b, callback1) {
    setTimeout(function () {
        var ab = a + b;      
        callback1 (ab);  
        ;
    }, 1000);
};
function apiNhan(a, b, callback1) {
    setTimeout(function () {
        var ab = a * b;      
        callback1 (ab);  
        ;
    }, 1000);
};
function apiChia(a, b, callback1) {
    setTimeout(function () {
        var ab = a / b;      
        callback1 (ab);  
        ;
    }, 1000);
};

function dtht (a, b, h, callback2) {
    apiCong(a,b,function(result) {
        apiNhan(result,h, function(result2){
            apiChia(result2,2,function(result3) {
                callback2(result3);
            })
        })
    })
};
dtht(3,4,5,function(result) {
    console.log("Dtht: " + result);
})
// apiCong(2,5, function(result){
//     console.log(result);
// })


//Lưu ý: Trong tiến trình bất đồng bộ không return về giá trị mà mình muốn lấy được nó 