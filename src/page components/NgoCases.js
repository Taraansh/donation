import { React, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import dogPaw from '../assets/dog-paw.png'

function NgoCases({cases}) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div>
            <div className='table-responsive'>
                <table className="table table-striped table-light table-bordered caption-top">
                    <caption><h1 style={{ color: '#ffffff', marginLeft: '0' }}>Cases</h1></caption>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {cases?.map((caseItem, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{caseItem.type_of_case}</td>
                            <td>{caseItem.status_of_case}</td>
                            <td>
                                <button className='btn btn-primary' type='button' onClick={handleShow}>Details</button>
                            </td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Case Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='table-responsive'>
                        <table className="table table-striped table-light table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">TYPE</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sterilization</td>
                                    <td>Active</td>
                                    <td>
                                        <button className='btn btn-primary' type='button' onClick={handleShow}>Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <Button className="btn btn-donate mx-auto btn-light">Donate  <img width='13%' src={dogPaw} alt="dog-paw" /></Button>
                </Modal.Footer>
            </Modal>
        </div>)
}

export default NgoCases
