import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeList from './components/list/EmployeeList';
import AddEmployee from './components/add/AddEmployee';
import Navbar from './components/navbar/Navbar';
import './App.css'

const App = () => {
  const [employees, setEmployees] = useState([
    { EmployeeId: '1', EmpName: 'John Doe', Department: 'IT', Salary: 50000 },
    { EmployeeId: '2', EmpName: 'Jane Smith', Department: 'HR', Salary: 60000 },
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList employees={employees} />} />
          <Route path="/add" element={<AddEmployee addEmployee={addEmployee} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;