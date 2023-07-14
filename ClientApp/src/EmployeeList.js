import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployeeName, setNewEmployeeName] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://your-server-api-endpoint.com/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addEmployee = async () => {
    try {
      const response = await axios.post('http://your-server-api-endpoint.com/employees', {
        name: newEmployeeName,
      });
      setEmployees([...employees, response.data]);
      setNewEmployeeName('');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const startEditingEmployee = (employee) => {
    setEditingEmployee(employee);
    setNewEmployeeName(employee.name);
  };

  const updateEmployee = async () => {
    try {
      const response = await axios.put(
        `http://your-server-api-endpoint.com/employees/${editingEmployee.id}`,
        {
          name: newEmployeeName,
        }
      );
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === editingEmployee.id) {
          return response.data;
        }
        return employee;
      });
      setEmployees(updatedEmployees);
      setEditingEmployee(null);
      setNewEmployeeName('');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://your-server-api-endpoint.com/employees/${id}`);
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {editingEmployee && editingEmployee.id === employee.id ? (
              <>
                <input
                  type="text"
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                />
                <button onClick={updateEmployee}>Save</button>
              </>
            ) : (
              <>
                {employee.name}
                <button onClick={() => startEditingEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {!editingEmployee && (
        <div>
          <input
            type="text"
            value={newEmployeeName}
            onChange={(e) => setNewEmployeeName(e.target.value)}
          />
          <button onClick={addEmployee}>Add Employee</button>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;