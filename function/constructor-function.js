export default function Student (userName, age, className, mathScore, englishScore){
     this.userName = userName;
     this.age = age;
     this.className = className;
     this.mathScore = mathScore;
     this.englishScore = englishScore;

     this.averageScore = () => {
          return (this.mathScore +  this.englishScore) / 2
     }

     this.learning = () => {
          console.log("Learning code");
     }
}