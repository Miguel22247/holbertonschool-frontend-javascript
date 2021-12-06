export default function getListStudentIds(studentIdArray) {
  if (!Array.isArray(studentIdArray)){
    return [];
  } else {
    return studentIdArray.map((item) => item.id);
  }
}
