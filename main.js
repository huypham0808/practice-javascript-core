import { congHaiSo, truHaiSo } from "./util.js";
/**
 * KIEN THUC ES6 (2015)
 */
console.log("Cong 2 so: " + congHaiSo(2,8));
console.log("Tru 2 so: " + truHaiSo(8,2));

let userName = "HuyPham";
console.log(userName);

function foo () {
    let x = 10; //function scope
    if (true) { //block scope
        let x = 20;
        console.log(x);
    }
    console.log(x); //20
};
foo();
for (var i =0; i < 3; i++){ //block scope
    console.log(i);
};
console.log(i); //3

const demoArrowFunc = () => {
    console.log("demoArrowFunc");
};
const tinhTong = (a,b) => a + b;

var rs = tinhTong(2,5);
console.log("Tong la: " + rs);
demoArrowFunc();

const sinhVien = {
    hoTen: "Huy",
    age: 18,

    layThongTin : function () {
        // function hienThiThongTin () {
        //     console.log(this);
        //     console.log(this.hoTen + "-" + this.age);
        // }
        // const bindHienThiThongTin = hienThiThongTin.bind(this);
        // bindHienThiThongTin();
        const hienThiThongTin =() => {
            console.log(this.hoTen + this.age);
        }
        hienThiThongTin();
    }
};

sinhVien.layThongTin();

const getInfor = (name = "Huy") => {
    console.log(name);
};

getInfor(); // Huy

const sum =(... numbers) => {
    let tinhTong = 0;
    for (let i = 0; i < numbers.length; i++) {
        tinhTong += numbers[i];
    }
    return tinhTong;
};

console.log(sum(2,5,3,7,3));

//--------------------------SPREAD OPERATOR
//Javascript vừa có tham trị và tham chiếu
let mangA = [1,2,3];
let mangB = [...mangA, 4, 5];

console.log(mangA); //1, 2, 3
console.log(mangB); // 1, 2, 3, 4, 5

const user = {
    hoTen: "A",
    tuoi: 18,
};

const user1 = {...user};
user1.lop = "BC50";

console.log(user);
console.log(user1);

//--------------------------DISTRUCTURING (Array vs Object---------------------------
console.log("Distructuring");

const arr = ["Huy", 18];
const [hoTen, age] = arr;
console.log(hoTen, age); // Huy18

const people = {
    id: 1,
    address: "TPHCM",
};

const {id, address} = people;
console.log(id,address); // 1 'TPHCM'

//--------------------------STRING TEMPLATE---------------------------
const u = "Huy";
const reSUI = `Hell ${u}`;
console.log(reSUI);
//--------------------------OBJECT LITERAL---------------------------
const firstName = "Huy";
const lastName = "Pham";

const student = {
    firstName, 
    lastName,
};
console.log(student.firstName + " " + student.lastName);  // Huy Pham

//--------------------------FOR OF AND FOR IN---------------------------
const listUser = ["Huy1", "Huy2", "Huy3"];
//FOR OF duyệt mảng lấy phần tử (không lấy được index)
for (let item of listUser) {
    console.log(item); // Huy1 Huy2 Huy3
};

//FOR IN lấy index
for (let i in listUser) {
    console.log(i); // 0 1 2
};

//--------------------------MOT SO HAM XU LY MANG---------------------------
const arrProduct = [
    {id: 1, name: "Sony Xperia 1", price: 1000, brand: "Sony"},
    {id: 2, name: "Sony Xperia 2", price: 2000, brand: "Sony"},
    {id: 3, name: "Iphone X", price: 3000, brand: "Apple"},

];

// for (let i = 0; i < arrProduct.length; i++) {
//     console.log(arrProduct[i]);
// };

//forEach: duyệt đến khi hết mảng thì ngưng---------------------------
arrProduct.forEach((product, index) => {
    console.log(index,product);
});

//forEach newArray 
const newArrProduct = [];
arrProduct.forEach((product, index) => {
    /**
     * 1. Tạo productNew
     * 2. productNew.price * 2
     * 3. productNew thêm vào newArrProduct
     */
    const productNew = {...product};
    productNew.price *= 2;
    newArrProduct.push(productNew);

});
console.log(newArrProduct);



console.log("-------------------");
//map: trả về mảng mới khi duyệt mảng cũ---------------------------
const newArrayProduct = arrProduct.map((product, index) => {
    const newProduct = {...product};
    newProduct.price *=2;
    return newProduct;
});
console.log(newArrayProduct);

//find: 
// let productFind = null;
// arrProduct.forEach((product) => {
//     if(product.id == 2){
//         productFind = product;
//     };
// });
// console.log(productFind);
const productFind = arrProduct.find((product) => product.id === 2);
console.log(productFind);

