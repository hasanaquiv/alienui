import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {
  Card,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
// import Footer from "components/Footers/Footer.js";

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      {/* <DropdownFixedNavbar /> */}
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Welcome To Alien Interface</h2>
                    <h4 className="description">
                    Alien Interface Is Sector Agnostic Software Solutions Provider Which Focuses On Leveraging Advance Technologies To Various Businesses And Helps Them To Implement Technology Ease Their Daily Working
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="3">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons business_chart-bar-32"></i>
                      </div>
                      <h4 className="info-title">Analysis</h4>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">Strategy</h4>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons design_app"></i>
                      </div>
                      <h4 className="info-title">Implementation</h4>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons ui-1_calendar-60"></i>
                      </div>
                      <h4 className="info-title">Management</h4>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5"
          // style={{
          //           backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
          //       }} 
          >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">What We Do?</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/alien-about.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3"> ALIEN INTERFACE</h6>
                      {/* <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Insticator raises $5.2M to help publishers
                        </a>
                      </CardTitle> */}
                      <p className="card-description">
                        We at ALIEN INTERFACE collaborate with various businesses globally to be a partner in technology advancement. We provide highly customizable software solutions by leveraging various technologies such as Blockchain Technology, Artificial Intelligence & Machine Learning, Internet of things, Intelligent Apps and more to offer as per their requirements
                      </p>                      
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <h6 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                        Technology
                      </h6>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Bringing Technology To Business
                        </a>
                      </CardTitle>
                      <p className="card-description">
                      We are a technology solutions company and are committed to being with your business  throughout your Journey to be future ready. We are a Software technology Consulting and software development services provider headquartered in Texas, USA with regional partners in India. We deliver consistent, compelling, innovative, and agile digital experiences to businesses. Our key strengths are our people, core values, design-driven innovation, agile mind-set, operational efficiency, technology expertise, and quality engineering. We are continuously innovating to provide best in class software technology consulting, software development, design services, custom products, mobility and cloud operations & decentralized solutions provider. Our solutions have empowered businesses across industry verticals and geographies to make the right decisions while focusing on their core business.
                      </p>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/technology.jpg")}
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
          </div>
          {/* <div className="about-team team-4">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">We are nerd rockstars</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Ella Evelyn</CardTitle>
                          <h6 className="category">Air Crew Member</h6>
                          <p className="card-description">
                            Think in the morning. Act in the noon. Eat in the
                            evening. Sleep in the night......
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/emily.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Mila Skylar</CardTitle>
                          <h6 className="category">Architect</h6>
                          <p className="card-description">
                            Love cures people - both the ones who give it and
                            the ones who receive it...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="dribbble"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-dribbble"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/james.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Daniel Carter</CardTitle>
                          <h6 className="category">Aviation Inspector</h6>
                          <p className="card-description">
                            Keep your face always toward the sunshine - and
                            shadows will fall behind you...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="youtube"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fa fab-youtube"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="instagram"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-instagram"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Dylan Wyatt</CardTitle>
                          <h6 className="category">Conservation Scientist</h6>
                          <p className="card-description">
                            There is only one corner of the universe you can be
                            certain of improving, and that's your own self...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div> */}          
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AboutUs;
