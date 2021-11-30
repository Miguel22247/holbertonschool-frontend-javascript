export default function createReportObject(employeesList) {
  return {
    allEmplo: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}