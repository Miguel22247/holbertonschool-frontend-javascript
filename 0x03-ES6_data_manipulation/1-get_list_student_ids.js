export default function getListStudentIds(studentIdArray) {
  if (!Array.isArray(studentIdArray)) {
    return [];
  }
  return studentIdArray.map((item) => item.id);
}
