export default function updateStudentGradeByCity(array, city, grade) {
  return array
  .filter((item) => item.location === city)
  .map((student) => {
    const gradeItems = grade
    .filter((item) => item.studentId === student.id)
  })
}
