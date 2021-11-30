export default function createReportObject(employeesList) {
  return {
    Emplolist: {
      ...employeesList,
    },
      getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}