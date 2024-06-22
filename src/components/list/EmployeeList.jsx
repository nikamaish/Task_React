import React from 'react';
import '../list/EmployeeList.css'

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.EmployeeId}>
              <td>{employee.EmployeeId}</td>
              <td>{employee.EmpName}</td>
              <td>{employee.Department}</td>
              <td>{employee.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;