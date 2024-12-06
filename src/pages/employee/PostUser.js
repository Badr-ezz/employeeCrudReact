import React, { useState } from 'react'
import './PostUser.css'
import  Form  from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'

export default function PostUser() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const  handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]:value,
        })
    };


  return (
    <>
        <div className='center-form'>
            <h1> Post New Employee</h1>
            <Form> 
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

                <Form.Group controlId = "formBasicName">
                    <Form.Control 
                    type="text"
                    name ="lastName"
                    placeholder="Enter Last Name"   
                    value={formData.lastName}
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
    