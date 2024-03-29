const getGradeGpa = (mark) => {
    let grade;
    let gpa;
  
    if (mark >= 0 && mark < 33) {
      grade = "F";
      gpa = 0;
    } else if (mark >= 33 && mark < 40) {
      grade = "D";
      gpa = 1;
    } else if (mark >= 40 && mark < 50) {
      grade = "C";
      gpa = 2;
    } else if (mark >= 50 && mark < 60) {
      grade = "B";
      gpa = 3;
    } else if (mark >= 60 && mark < 70) {
      grade = "A-";
      gpa = 3.5;
    } else if (mark >= 70 && mark < 80) {
      grade = "A";
      gpa = 4;
    } else if (mark >= 80 && mark <= 100) {
      grade = "A+";
      gpa = 5;
    }
  
    return {
        gpa: gpa,
        grade: grade
    };
};
