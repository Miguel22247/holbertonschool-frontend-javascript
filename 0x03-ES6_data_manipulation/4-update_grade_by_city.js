export default function updateStudentGradeByCity(array, city) {
  return array
  .filter((item) => item.location === city)
}
