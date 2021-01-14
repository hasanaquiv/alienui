import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeHeader from "components/Headers/HomeHeader.js";
// import FooterDefault from "components/Footers/FooterBlack.js";

const Home = () => {
  // const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <HomeHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  Globally various organizations have failed to keep up with advancements in technology upgradations for decades now.
                  They have to pay more to get little work done thus getting overall costs up.
                  Analysing and development of business based technology needs are expensive
                  Here we at ALIEN INTERFACE helps businesses like your to support in technology

                </h5>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="4">
                  <Card
                    className="card-background card-raised"
                    data-background-color=""
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/enterprises.jpg") + ")",
                    }}
                  >
                    <div className="info">
                      <div className="icon icon-white">
                        <i className="now-ui-icons objects_planet"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">For Large Enterprises</h4>
                        <p>
                          Modernize and expand your enterprise with us to elevate operational efficiency, automate business needs, enhancement in customer satisfactions. Our technology experts helps in development leveraging advanced technologies to optimize complicated business processes.
                          </p>
                        <a
                          className="ml-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Find more...
                          </a>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card
                    className="card-background card-raised"
                    data-background-color=""
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/start-ups.jpg") + ")",
                    }}
                  >
                    <div className="info">
                      <div className="icon icon-white">
                        <i className="now-ui-icons objects_planet"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">For Start-Ups</h4>
                        <p>
                          In a quickly evolving marketplace, founders need software development with rapid and Agile delivery. We can help you to identify key features, create a plan of product development and get the project ready to launch
                          </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Find more...
                          </a>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card
                    className="card-background card-raised"
                    data-background-color=""
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/small-business.jpg") + ")",
                    }}
                  >
                    <div className="info">
                      <div className="icon">
                        <i className="now-ui-icons location_world"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">For Small & Medium Businesses</h4>
                        <p>
                          Custom software development can streamline business processes, helping you to be more efficient as a team to reach your particular business goals and motivate your employees and customers
                          </p>
                        <a
                          className="ml-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Find more...
                          </a>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ALIEN INTERFACE</h2>
                <h4 className="description text-white">
                  "We understand the sensitivity of data and that’s why we use state of the art Blockchain technology to keep data safe and secure. Blockchain makes us one of the most secure systems in the world. "
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="10">
                <h5 className="description text-white text-center">
                  Our team helps various business access to modern technologies with easy to use platforms for their daily business need.
                  Our experts helps various sized businesses from startups to large sized business.
                  Vision to implement trending technologies
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    firstFocus ? "input-lg input-group-focus" : "input-lg"
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    emailFocus ? "input-lg input-group-focus" : "input-lg"
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email Here..."
                    type="text"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <FooterDefault /> */}
      </div>
    </>
  );
}

export default Home;
