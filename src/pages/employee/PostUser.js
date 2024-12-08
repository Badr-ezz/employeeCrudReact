import React, { useEffect, useState } from 'react'
import './PostUser.css'
import  Form  from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export default function PostUser() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const navigate = useNavigate();

    const  handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]:value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch("http://localhost:8080/api/employee",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(formData)
            })

            const data = await response.json;
            console.log("Employee created " + data);
            navigate("/");
            
        } catch (error) {
            console.log("Error while posting employee" + error.message);
        }
    }


  return (
    <>
        <div className='center-form'>
            <h1> Post New Employee</h1>
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
                    Post Employee
                </Button>
            </Form>
        </div>
    </>
  )
} 
    


  