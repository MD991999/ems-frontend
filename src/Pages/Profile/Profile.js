import React from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'

function Profile() {
  return (
    <>
      <div className="container">
        <Card className='shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                  <img className="border p-1 " style={{ mixBlendMode: "multiply" }} width={'70px'} height={'60px'} src="https://www.pngitem.com/pimgs/m/75-754416_female-user-free-images-female-business-user-icon.png" alt="" />
                </div>
              </div>
            </Row>
            <div className='text-center mt-3'>
              <h3>Max Miller</h3>
              <h6 className='mt-2'><i className="fa-solid fa-envelope fa-xl"> &nbsp;&nbsp; :-<span style={{fontSize:'15px' ,color:'grey'}}>d@gmail.com</span></i></h6>
              <h6 className='mt-2'><i className="fa-solid fa-mobile fa-xl">&nbsp;&nbsp;:-<span style={{fontSize:'15px'}}>9876543210</span></i></h6>
              <h6 className='mt-2'><i className="fa-solid fa-venus-mars fa-xl">&nbsp;&nbsp;:-<span style={{fontSize:'15px'}}>Female</span></i></h6>
              <h6 className='mt-2'><i className="fa-solid fa-location-dot fa-xl">&nbsp;&nbsp;:-<span style={{fontSize:'15px'}}>Wayanad</span></i></h6>
              <h6 className='mt-2'><i className="fa-solid fa-chart-line fa-xl">&nbsp;&nbsp;:-<span style={{fontSize:'15px'}}>Active</span></i></h6>

            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile