import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import  Col from 'react-bootstrap/Col';
import  Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {

  const [employees, setEmployees] = useState([]);
  const navigate = new useNavigate();


  useEffect( () => {
    const fetchEmployees = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/employees');
          const data = await response.json();
          console.log(data);
          setEmployees(data);
        } catch (error) {
           console.log("Error while retrieving employees" + error.message);
        }
      }

      fetchEmployees();
  },[]);

  const handelDelete = async (employeeId) => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`,{
          method: 'DELETE',
        });

        if (response.ok) {
            console.log("employee deleted successfully");
            setEmployees( () => ( employees.filter(employee => employee.id !== employeeId) )
            )
        }
      } catch (error) {
          console.log("Error while deleting employee" + error.message);    
      }
  }

  const handleUpdate =  (employeeId) => {
    navigate(`/employee/${employeeId}`);
  }

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <h1 className='text-center'>Employees</h1>
            <Table striped hover bordered responsive>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key = {employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td> 
                    <td>{employee.email}</td>
                    <td>
                      <Button variant="outline-secondary" onClick={() => handleUpdate(employee.id)}> Update </Button> {""}
                      <Button variant="outline-danger" onClick={() => handelDelete(employee.id)}> Delete </Button>
                    </td>
                  </tr>                 
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

      </Container>
    </>
  )
}
