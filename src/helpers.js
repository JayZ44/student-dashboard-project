export function getUniqueCohort(Students, cohortArr) {
  Students.map((student) => {
    if (!cohortArr.includes(student.cohort.cohortCode)) {
      cohortArr.push(student.cohort.cohortCode);
    }
  });

  return cohortArr;
}

export function getStudentsByCohort(cohortName, Students, cohortArr) {
  cohortArr = [];
  cohortArr.push(
    Students.filter((student) => {
      student.cohort.cohortCode === cohortName;
    })
  );
  return cohortArr;
}
