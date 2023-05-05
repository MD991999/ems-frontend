import React from 'react'
import './Maintable.css'
import { Row, Card, Table, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Maintable() {
    return (
        <>
            <div className='container mt-5'></div>
            <Row>
                <div className="col">
                    <Card className='shadow'>
                        <Table className="align-items-center" responsive="sm">
                            <thead className='thead-dark'>
                                <tr className='table-secondary'>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Profile</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Michelle</td>
                                    <td>m@gmail.com</td>
                                    <td>F</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Active
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item >Active</Dropdown.Item>
                                                <Dropdown.Item >Inactive</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td>
                                        <img style={{ mixBlendMode: "multiply" }} width={'70px'} height={'60px'} src="https://www.pngitem.com/pimgs/m/75-754416_female-user-free-images-female-business-user-icon.png" alt="" />
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle vaiant='light' id="dropdown-basic1">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item >
                                                    <Link to={'/profile/1'} className='text-decoration-none'>
                                                        <i className="fa-solid fa-eye text-success"></i>
                                                        <span>View</span>
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link to={'/edit/1'} className='text-decoration-none'>
                                                        <i className="fa-solid fa-pen text-danger"></i>
                                                        <span>Edit</span>
                                                    </Link>
                                                </Dropdown.Item>

                                                <Dropdown.Item >
                                                    <div>
                                                        <i className="fa-solid fa-trash text-danger"></i>
                                                        <span>Delete</span>

                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Card>
                </div>
            </Row>
        </>
    )
}

export default Maintable