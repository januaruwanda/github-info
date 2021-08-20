import React,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Result = (props) => {
    const { reposInfo } = props;
    console.log('Repos is :', reposInfo)
    const [commit, setCommit] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleClick = async (name) => {
        console.log(name)
        setShow(true);

        try {
            const result = await axios(`https://api.github.com/repos/januaruwanda/${name}/commits`);

            setCommit(result);
        }catch(err){
            console.log(err)
        }      
    };

    console.log(commit.data);

    const listRepos = reposInfo.length !== 0 ? reposInfo.data.map((item) => 
        <ListGroup>
            <ListGroup.Item action variant="info" value={item.name} action onClick={() => handleClick(item.name)}>
            <p style={{ textAlign: "center" }}>
                {item.name}
            </p>
            </ListGroup.Item>
        </ListGroup>) : 
        <ListGroup>
            <ListGroup.Item action variant="info">
            <p style={{ textAlign: "center" }}>
                Please search the username first
            </p>
            </ListGroup.Item>
        </ListGroup>;

    const listCommit = commit.length !== 0 ? commit.data.map((item) => 
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Commits</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <ListGroup>
                  <ListGroup.Item>
                  <p style={{ textAlign: "center" }}>
                      {item.sha}
                  </p>
                  </ListGroup.Item>
              </ListGroup>
             
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
        </Modal>) : <p>null</p> ;
    
    return (
        <>
        <Container>
            <div>
                {listRepos}
            </div>
        </Container>
       {listCommit}
        
       
  
        
        
        </>
    
    );
    
}

export default Result;