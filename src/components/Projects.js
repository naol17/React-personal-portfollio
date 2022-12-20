import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/medx.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/tecl.png";
import a1 from "../assets/img/Artboard 1.png";
import a2 from "../assets/img/Artboard 2.png";
import a3 from "../assets/img/Artboard 3.png";
import a4 from "../assets/img/Artboard 4.png";
import a5 from "../assets/img/Artboard 5_1.png";
import a6 from "../assets/img/Artboard 16.png";
import a7 from "../assets/img/Artboard 5_3.png";
import a8 from "../assets/img/Artboard 5_4.png";
import a9 from "../assets/img/Artboard 5.png";
import a10 from "../assets/img/Artboard 10.png";
import a11 from "../assets/img/Artboard 11.png";
import a12 from "../assets/img/Artboard 12.png";
import a13 from "../assets/img/Artboard 13.png";
import a14 from "../assets/img/Artboard 14.png";
import a15 from "../assets/img/Artboard 15.png";


import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MedXpert",
      description: "A React Native web and mobile application made for enhancing tech and health for facilitating and making easy to access health care and making life more easy and enjoyable",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Web design and development for startup company to give course online developed by my team ",
      imgUrl: projImg2,
    },
   
  ];

  // ************************************************
  const GRD = [
    {
      title: "MedXpert",
      description: "A React Native web and mobile application made for inhencing tech and health for facilitating and making easy to access health care and making life more easy and enjoyable",
      imgUrl: a1,
    },
    {
      title: "Business Startup",
      description: "Web design and development for startup company to give course online developed by my team ",
      imgUrl: a2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a3,
    },
    {
      title: "Ettrans Ethiopia   ",
      description: "Ettrans is a mobile application made for transport and logistics to facilitate and connect communication between drivers and loaders those who needs cargo service has advantage for both brokers drivers and the owners make every thing easy as a click of button",
      imgUrl: a4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a7,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a8,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a9,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a10,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a11,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a12,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a13,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a14,
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: a15,
    },
  ];
  // ************************************************

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third"><p>This Section contains some of my graphic design work samples for displaying for clients want to connect to work with me</p>
                    <Row>
                        {
                          GRD.map((design, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...design}
                                />
                            )
                          })
                        }
                      </Row>
                                          </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
