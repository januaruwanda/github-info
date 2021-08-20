import React,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container } from 'react-bootstrap';
import axios from 'axios';

const Result = (props) => {
    const { reposInfo } = props;
    console.log('Repos is :', reposInfo)
    const [commit, setCommit] = useState([]);
    const [list, setList] = useState('');

    const handleClick = async (e) => {
        setList(e.target.value)
        console.log(list);

        try {
            const result = await axios(`https://api.github.com/repos/januaruwanda/cafetaria_januar/commits`);

            setCommit(result);
        }catch(err){
            console.log(err)
        }      
    };

    console.log(commit);

    const listRepos = reposInfo.length !== 0 ? reposInfo.data.map((item) => 
        <ListGroup>
            <ListGroup.Item action variant="info" value={item.name} action onClick={handleClick}>
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
    
    return (
        <>
        <Container>
            <div>
                {listRepos}
            </div>
        </Container>
        
        </>
    
    );
    
}

export default Result;