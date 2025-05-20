//Hàm bên trong đối tượng (object)
import softwareEngineer from "./Models/Developer.js";
import Student from "./constructor-function.js";

let developer = {
     age : 10,
     name: "Huy Pham",
     action: () => {
          console.log("Coding");
     },
     showName: function(){
          console.log("Show name: ", this.name);
     },
     showNameArrowFn: () => {
          console.log("Show name: ", this.name);
     }

}
console.log("age: ", developer.age);
console.log("name: ", developer.name);
developer.action();
developer.showName();
//developer.showNameArrowFn(); //Arrow function không hiểu this => undifined

const swe = new softwareEngineer("Huy Pham", 12, "CNTT");
console.log(`New software engineer name is: ${swe.userName} \n His age is: ${swe.age} \n His class is: ${swe.className}`);


/**Create new Student */
console.log("-------------------------")
const student = new Student("CAD 1", 17, "AutoCAD.NET", 10, 8);
console.log(`Student information: ${student.userName} \n His age is: ${student.age} \n His class is: ${student.className} \n Diem trung binh: ${student.averageScore()}`);
