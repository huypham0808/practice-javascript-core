export default function Developer (userName, age, className){
     this.userName = userName;
     this.age = age;
     this.className = className;

     this.learning = () => {
          console.log("Learning code");
     }
}

