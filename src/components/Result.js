import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Container } from "react-bootstrap";
import axios from "axios";

const Result = (props) => {
  const { reposInfo } = props;
  console.log("Repos is :", reposInfo.data);
  const [commit, setCommit] = useState([]);

  const handleClick = async (name) => {
    console.log(name);
    try {
      const result = await axios(
        `https://api.github.com/repos/${reposInfo.data[0].owner.login}/${name}/commits`
      );

      setCommit(result);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Name is :", commit.data);

  const listRepos =
    reposInfo.length !== 0 ? (
      reposInfo.data.map((item) => (
        <ListGroup>
          <ListGroup.Item
            action
            variant="info"
            value={item.name}
            action
            onClick={() => handleClick(item.name)}
            key={item.id}
          >
            <p style={{ textAlign: "center" }}>{item.name}</p>
          </ListGroup.Item>
        </ListGroup>
      ))
    ) : (
      <ListGroup>
        <ListGroup.Item action variant="info">
          <p style={{ textAlign: "center" }}>
            Please search the username first
          </p>
        </ListGroup.Item>
      </ListGroup>
    );

  const listCommit =
    commit.length !== 0 ? (
      commit.data.map((item) => (
        <ListGroup>
          <ListGroup.Item>
            <p style={{ textAlign: "center" }}>
              <ul>
                <li>
                  <p>
                    {item.commit.author.name}{" "}
                    <span> ({item.commit.author.date})</span>
                  </p>
                  <br />
                  {item.commit.message}
                </li>
              </ul>
            </p>
          </ListGroup.Item>
        </ListGroup>
      ))
    ) : (
      <ListGroup>
        <ListGroup.Item>
          <p style={{ textAlign: "center" }}>Data not found</p>
        </ListGroup.Item>
      </ListGroup>
    );

  return (
    <>
      <Container>
        <div>
          <h3 style={{ textAlign: "center" }}>Repository</h3>
          {listRepos}
        </div>
      </Container>
      <Container>
        <div>
          <h3 style={{ textAlign: "center" }}>Commits</h3>
          {listCommit}
        </div>
      </Container>
    </>
  );
};

export default Result;
