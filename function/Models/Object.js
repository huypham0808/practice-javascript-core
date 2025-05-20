export default function Employee (userName, age){
     this.userName = userName;
     this.age = age;

     this.learning = () => {
          console.log("Learning code");
     };
     
}
//Khai bao Object kieu literal
let nhanVien1 = {
     tenNhanvien: "Huy Pham",
     tuoiNhanVien: 18,

     action: () => {
          console.log("Welcome!");
     },
     chucVu: {
          quanLy: ["ASE1", "ASE2"],
          giamDoc: {
               giamDoc1: "GD1",
               giamDoc2: "GD2"
          }
     }
}

console.log('----------------------')
const nhanVien2 = new Object();
nhanVien2.userName = "Huy Pham";
nhanVien2.age = 18;
nhanVien2.learning = () => {
     console.log("Learning code");
};
//2 cách truy cập vào thuộc tính trong object
//C1:
// console.log("Cách 1: ", nhanVien2.userName);
//C2:
// console.log("Cách 2:",nhanVien2["userName"]);
// console.log("Cách 2 - age:",nhanVien2["age"]);
/**Thêm, xóa, sửa thuộc tính trong object*/
nhanVien2.gender = "Male";
delete nhanVien1.action;
console.log(nhanVien1);
console.log(nhanVien2);