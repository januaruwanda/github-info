import React,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Button, Modal } from 'react-bootstrap';
// import axios from 'axios';

const Commit = (props) => {
    const { commitInfo } = props;
    console.log('Repos is :', commitInfo)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const listCommit = commitInfo.length !== 0 ? commitInfo.commit.map((item) => 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Commits</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <div className="col-md-12">
                <div className="row">
                  <label className="col-md-12">Author </label>
                </div>
                <div className="row">
                  <input type="text" value={item.author.name} className="form-control col-lg-8" readonly/>
                </div>
                <div className="row">
                  <label className="col-md-12">Date </label>
                </div>
                <div className="row">
                  <input type="text" value={item.author.date} className="form-control col-lg-8" readonly/>
                </div>
                <div className="row">
                  <label className="col-md-12">Comitter </label>
                </div>
                <div className="row">
                  <input type="text" value={item.committer.name} className="form-control col-lg-8" readonly/>
                </div>
                <div className="row">
                  <label className="col-md-12">Date </label>
                </div>
                <div className="row">
                  <input type="text" value={item.comitter.date} className="form-control col-lg-8" readonly/>
                </div>
                <div className="row">
                  <label className="col-md-12">Message </label>
                </div>
                <div className="row">
                  <input type="text" value={item.message} className="form-control col-lg-8" readonly/>
                </div>
              </div>
              </Container>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>) : 
    <ListGroup>
        <ListGroup.Item action variant="info">
        <p style={{ textAlign: "center" }}>
            Please search the username first
        </p>
        </ListGroup.Item>
    </ListGroup>;
  
    return (
      <>
        {listCommit}
      </>
    );
  }

  export default Commit;