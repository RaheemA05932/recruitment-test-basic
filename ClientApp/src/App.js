import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';
/** 
export default function () {

    async function getEmployees() {
        return fetch("/employees").then(response => response.json());
    }

    async function createEmployee(name, value) {
        return fetch("/employees", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    async function updateEmployee(name, value) {
        return fetch("/employees", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    return (
        <div>Complete your app here</div>
    );
}

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState('');
  
    useEffect(() => {
      fetchEmployees();
    }, []);
  
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  
    const addEmployee = async () => {
      try {
        const response = await axios.post('http://localhost:8000/employees', {
          name: newEmployee
        });
        setEmployees([...employees, response.data]);
        setNewEmployee('');
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    };
  
    const updateEmployee = async (id, newName) => {
      try {
        await axios.put(`http://localhost:8000/employees/${id}`, {
          name: newName
        });
        const updatedEmployees = employees.map(employee => {
          if (employee.id === id) {
            return { ...employee, name: newName };
          }
          return employee;
        });
        setEmployees(updatedEmployees);
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  
    const deleteEmployee = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/employees/${id}`);
        const updatedEmployees = employees.filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    };
  
    return (
      <div>
        <h2>Employee List</h2>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name}{' '}
              <button onClick={() => updateEmployee(employee.id, `${employee.name} Updated`)}>Edit</button>{' '}
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newEmployee}
          onChange={e => setNewEmployee(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    );
  }
  
 */
  import React from 'react';
  import EmployeeList from './EmployeeList';
  
  function App() {
    return (
      <div className="App">
        <EmployeeList />
      </div>
    );
  }
  
  export default App;