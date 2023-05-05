import React from 'react'
import './Home.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Maintable from '../../Components/Maintable/Maintable'

function Home() {
  // js code
  const navigate = useNavigate()
  const adduser = () => {
    // navigate to register page
    navigate('/register')
  }
  return (
    <>
      <div className='container mt-5'>
        <div className='first_div'>
          {/* search button and add employee */}

          <div className='search_add d-flex justify-content-between'>
            <div className='search col-lg-4 '>
              <Form className='d-flex '>
                <Form.Control type="email" placeholder="Enter email" />
                <Button className='ms-2' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className='add_btn'>
              <Button variant="success" onClick={adduser} >
                <i className='fa-solid fa-user-plus'>Add</i>
              </Button>

            </div>
          </div>
        </div>
        <div className='second_div'>
          {/* table */}
          <Maintable />
        </div>
      </div>

    </>
  )
}

export default Home