import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';


export default function UpdateUser() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })


   useEffect(() => {
      const fetchEmployee = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`);
            const data = await response.json();
            console.log(data);
            
            setFormData(data);
        } catch (error) {
            console.log("Error while finding employee" + error.message);          
        }
      } 
      fetchEmployee();
   },[id])

    const  handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]:value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
                method: 'PUT',
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(formData) });
            const data = response.json();
            console.log(data);
            navigate("/");

        } catch (error) {
            console.log("Error while updating employee" + error.message);          
        }
    }

  return (
    <>
    <div className='center-form'>
        <h1> Updating Employee</h1>
        <Form onSubmit={handleSubmit}> 
            <Form.Group controlId = "formBasicName">
                <Form.Control 
                type="text"
                name ="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleInputChange } />
            </Form.Group>

            <Form.Group controlId = "formBasicName">
                <Form.Control 
                    type="text"
                    name ="lastName"
                    placeholder="Enter Last Name"   
                    value={formData.lastName}
                    onChange={handleInputChange} />
            </Form.Group>


            <Form.Group controlId = "formBasicName">
                <Form.Control 
                    type="email"
                    name ="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Edit Employee
            </Button>
        </Form>
    </div>
</>
  )
}
