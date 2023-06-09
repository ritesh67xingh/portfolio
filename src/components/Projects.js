import React from "react";
import {Col, Container, Tab, Nav, Row} from "react-bootstrap"
import ProjectCard from './ProjectCard'
import TrackVisibility from 'react-on-screen'
import portfolioImg from '../assets/img/portfolioImg.png'
import weatherImg from '../assets/img/weatherImg.png'
import typeImg from '../assets/img/typeImg.png'

import colorSharp2 from '../assets/img/color-sharp2.png'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "My Work: Store-House",
      imgUrl: portfolioImg,
      url:"https://ritesh67xingh.github.io/portfolio/"
    },
    {
      title: "Weather",
      description: "Helps find the weather forecast of a City ",
      imgUrl: weatherImg,
      url: "https://ritesh67xingh.github.io/weatherapi.github.io/"
    },
    {
      title: "Postal-Lookup",
      description: "App to find address and postal codes",
      imgUrl: typeImg,
      url:"https://ritesh67xingh.github.io/postal-lookup/"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility >
                        {({ isVisible}) => 
                                          <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <h2>Work</h2>
            <p>Check out my Recent Work!    Click below Tabs for More Details.</p>
            </div>}
            </TrackVisibility>
            <Tab.Container>
            <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center gap-2" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first" active='true'>Recently Updated Apps</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab 3
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
            <Tab.Content >
              <Tab.Pane eventKey='first' active='true'>
                  <Row>
                    {
                      projects.map((project, index)=>{
                        return (
                          <ProjectCard 
                          key={index}
                          {...project}
                          />
                        )
                      })
                    }
                  </Row>
              </Tab.Pane>
              {/* <Tab.Pane eventKey="second">
                    Random text
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                   Random text
              </Tab.Pane> */}
              
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
}
