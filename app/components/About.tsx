import React from 'react'
import { Container, Nav, NavItem, NavLink, Tab, Tabs } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <>
      <div className="about">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-parallax="scroll"
                data-image-src="img/about.jpg">
                <img src="https://cdn.pixabay.com/photo/2023/04/13/23/07/sea-turtle-7923608__340.png" alt="this is us" fluid />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <p>Learn About Us</p>
                <h2>Worldwide non-profit charity organization</h2>
              </div>
              <div className="about-tab">
                <Tabs className="nav-pills nav-justified">
                  <Tab title="linkNav" className="nav-item">
                    <NavLink
                      className="nav-link active"
                      eventKey="tab-content-1">
                      About
                    </NavLink>
                  </Tab>
                  <Tab title="linkNav" className="nav-item">
                    <NavLink className="nav-link" eventKey="tab-content-2">
                      Mission
                    </NavLink>
                  </Tab>
                  <Tab title="linkNav" className="nav-item">
                    <NavLink className="nav-link" eventKey="tab-content-3">
                      Vision
                    </NavLink>
                  </Tab>
                </Tabs>
                <div className="tab-content">
                  <Tab.Pane
                    eventKey="tab-content-1"
                    className="container tab-pane active">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vitae pellentesque turpis. Donec in hendrerit dui, vel
                    blandit massa. Ut vestibulum suscipit cursus. Cras quis
                    porta nulla, ut placerat risus. Aliquam nec magna eget velit
                    luctus dictum. Phasellus et felis sed purus tristique
                    dignissim. Morbi sit amet leo at purus accumsan
                    pellentesque. Vivamus fermentum nisi vel dapibus blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="tab-content-2"
                    className="container tab-pane fade">
                    Sed tincidunt, magna ut vehicula volutpat, turpis diam
                    condimentum justo, posuere congue turpis massa in mi. Proin
                    ornare at massa at fermentum. Nunc aliquet sed nisi iaculis
                    ornare. Nam semper tortor eget est egestas, eu sagittis nunc
                    sodales. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Praesent bibendum sapien sed purus molestie
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="tab-content-3"
                    className="container tab-pane fade">
                    Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut
                    sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit
                    enim. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Sed condimentum semper turpis vel facilisis. Nunc
                    vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi
                    at, venenatis quam. Praesent egestas pretium enim sit amet
                    finibus. Curabitur at erat molestie, tincidunt lorem eget,
                    consequat ligula.
                  </Tab.Pane>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About