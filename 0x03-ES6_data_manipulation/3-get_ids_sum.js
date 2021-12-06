export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((accumulator, item) => accumulator + item.id, 0);
}
