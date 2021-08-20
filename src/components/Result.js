import React,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Result = (props) => {
    const { reposInfo } = props;
    console.log('Repos is :', reposInfo.data)
    const [commit, setCommit] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const reposName = reposInfo.data.map((owner) =>
    // <li>{owner}</li>
    // );

    // console.log('Name is :', reposName)

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

    const listRepos = reposInfo.length !== 0 ? reposInfo.data.map((item) => 
        <ListGroup>
            <ListGroup.Item action variant="info" value={item.name} action onClick={() => handleClick(item.name)} key={item.id}>
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
    // <Modal show={show} onHide={handleClose}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Commits</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Container>
              <ListGroup>
                  <ListGroup.Item>
                  <p style={{ textAlign: "center" }}>
                      <ul>
                          <li>
                          <p>{item.commit.author.name} <span> ({item.commit.author.date})</span></p>
                          <br />
                        {item.commit.message}                          
                          </li>
                      </ul>
                  </p>
                  </ListGroup.Item>
              </ListGroup>
             
        //       </Container>
              
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={handleClose}>
        //       Close
        //     </Button>
        //     <Button variant="primary" onClick={handleClose}>
        //       Save Changes
        //     </Button>
        //   </Modal.Footer>
        // </Modal>
         ) : 
        <ListGroup>
        <ListGroup.Item>
        <p style={{ textAlign: "center" }}>
            Data not found
        </p>
        </ListGroup.Item>
    </ListGroup> ;
    
    return (
        <>
        <Container>
            <div>
            <h3 style={{ textAlign: "center" }}>
                Repository
            </h3>
                {listRepos}
            </div>
        </Container>
        <Container>
            <div>
            <h3 style={{ textAlign: "center"  }}>
                Commits
            </h3>
            {listCommit}
            </div>
        </Container>
       
        
       
  
        
        
        </>
    
    );
    
}

export default Result;