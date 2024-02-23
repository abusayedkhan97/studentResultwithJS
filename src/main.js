let search = 16;

let student = students.filter((item) =>{
    if (item.roll == search || item.RegistrationNumber == search || item.gender == search) {
        return item;
    }
});

student.forEach((student) =>{
    //all student data
    const {name, roll, RegistrationNumber, gender, bangla, english, math, science, social, religion} = student;
    
  const totalGpa = (
      (getGradeGpa(bangla).gpa + 
      getGradeGpa(english).gpa +
      getGradeGpa(math).gpa +
      getGradeGpa(science).gpa +
      getGradeGpa(social).gpa +
      getGradeGpa(religion).gpa) / 6
  ).toFixed(2);

  let studentGpa;
  let studentGrade;
  if (bangla >= 33 &&
      english >= 33 && 
      math >= 33 && 
      science >= 33 && 
      science >= 33 && 
      social >= 33 && 
      religion >= 33){
      if(totalGpa >= 0 && totalGpa < 1){
          studentGpa = totalGpa;
          studentGrade = "F";
      }else if (totalGpa >= 1 && totalGpa < 2) {
          studentGpa = totalGpa;
          studentGrade = "D";
      }else if (totalGpa >= 2 && totalGpa < 3) {
          studentGpa = totalGpa;
          studentGrade = "C";
      }else if (totalGpa >= 3 && totalGpa < 3.5) {
          studentGpa = totalGpa;
          studentGrade = "B";
      }else if (totalGpa >= 3.5 && totalGpa < 4) {
          studentGpa = totalGpa;
          studentGrade = "A-";
      }else if (totalGpa >= 4 && totalGpa < 5) {
          studentGpa = totalGpa;
          studentGrade = "A";
      }else if (totalGpa >= 5) {
          studentGpa = totalGpa;
          studentGrade = "A+";
      }
  }else{
      studentGpa = 0;
      studentGrade = "F"
  }


  console.log(`
      Name : ${name}
      Gender: ${gender}
      Roll : ${roll}
      RegistrationNumber : ${RegistrationNumber}
      ---------------------
      GPA: ${studentGpa}
      Grade: ${studentGrade}
  `);

});