import React from 'react'
import './Register.css'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import Select from 'react-select'

function Register() {
  const option = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }

  ]
  return (
    <>
      <div className="container ">
        <h2 className='text-center'>Register employee details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className='text-center'>
            <img className="border p-1 " style={{ mixBlendMode: "multiply" }} width={'70px'} height={'60px'} src="https://www.pngitem.com/pimgs/m/75-754416_female-user-free-images-female-business-user-icon.png" alt="" />
          </div>
          <Form>
            <Row>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="fname" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name='email' placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name="mobile" placeholder="Mobile" />
              </Form.Group>
              {/* gender */}
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select gender</Form.Label>
                <Form.Check

                  type={"radio"}
                  label={"Male"}
                  name='gender'
                  value={"Male"}
                />
                <Form.Check

                  type={"radio"}
                  label={"Female"}
                  name='gender'
                  value={"Female"}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select employee status</Form.Label>
                <Select className='text-dark' options={option}></Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicprofilepic">
                <Form.Label>Select profile image</Form.Label>
                <Form.Control type="file" name="user_profile" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Enter employee location</Form.Label>
                <Form.Control type="text" name="location" placeholder='location' />
              </Form.Group>

              <Button variant='primary' type='submit'>Submit</Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Register