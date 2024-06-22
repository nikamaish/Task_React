import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css';

const AddEmployee = ({ addEmployee }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    EmployeeId: '',
    EmpName: '',
    Department: '',
    Salary: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!employee.EmployeeId) tempErrors.EmployeeId = "Employee ID is required";
    if (!employee.EmpName) tempErrors.EmpName = "Employee Name is required";
    if (!employee.Department) tempErrors.Department = "Department is required";
    if (!employee.Salary) tempErrors.Salary = "Salary is required";
    else if (isNaN(employee.Salary)) tempErrors.Salary = "Salary must be a number";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addEmployee(employee);
      setEmployee({ EmployeeId: '', EmpName: '', Department: '', Salary: '' });
      navigate('/');
    }
  };

  return (
    <div className="add-employee-container">
      <h1 className="add-employee-title">Fill The Form</h1>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label htmlFor="EmployeeId">Employee ID:</label>
          <input
            type="number"
            id="EmployeeId"
            name="EmployeeId"
            value={employee.EmployeeId}
            onChange={handleChange}
          />
          {errors.EmployeeId && <span className="error-message">{errors.EmployeeId}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="EmpName">Employee Name:</label>
          <input
            type="text"
            id="EmpName"
            name="EmpName"
            value={employee.EmpName}
            onChange={handleChange}
          />
          {errors.EmpName && <span className="error-message">{errors.EmpName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Department">Department:</label>
          <input
            type="text"
            id="Department"
            name="Department"
            value={employee.Department}
            onChange={handleChange}
          />
          {errors.Department && <span className="error-message">{errors.Department}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Salary">Salary:</label>
          <input
            type="number"
            id="Salary"
            name="Salary"
            value={employee.Salary}
            onChange={handleChange}
          />
          {errors.Salary && <span className="error-message">{errors.Salary}</span>}
        </div>
        <button type="submit" className="submit-button">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;