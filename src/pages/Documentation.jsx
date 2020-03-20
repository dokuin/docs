import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useState } from 'reac'

const Documentation = () => {


  return (
    <Container fluid>
      <Row className="mt-5">
        <Col
          className="position-fixed"
          id="sticky-sidebar"
          style={{
            height: "100%",
            backgroundColor: "#f0f0f0",
            borderRight: "1px solid #cccccc"
          }}
          sm={2}
        >
          {/* list of sidebar */}
          <div className="mt-5">
            <a
            className="px-3"
              style={{
                backgroundColor: "grey",
                display: "flex",
                justifyContent: 'space-between',
              }}
              onClick={()=> showList()}
            >
              <h5 style={{}}>TITLE</h5>
              <h5>></h5>
            </a>
            
            <ul>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
              <li>list</li>
            </ul>
          </div>
        </Col>
        <Col>
          <Row>
            <Col sm={2}>{/* empty content for sidebar space */}</Col>
            <Col sm={10}>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                qui autem dolores repellat commodi debitis consequuntur quae
                pariatur sed eaque fuga ducimus rem, aspernatur maiores officiis
                sapiente quibusdam id expedita.
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                voluptatum labore consequatur cupiditate maxime tempore, cum
                repellendus eligendi suscipit dolorum et quasi veritatis numquam
                excepturi accusamus molestias impedit repellat omnis?
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
