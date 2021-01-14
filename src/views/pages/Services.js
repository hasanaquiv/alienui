import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {
    Badge,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
// import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import ServiceHeader from "components/Headers/ServiceHeader.js";
// import Footer from "components/Footers/Footer.js";

function Services() {
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
                <ServiceHeader />
                <div className="section">
                    <div className="about-description text-center">
                        <div className="features-3">
                            <Container>
                                <Row>
                                    <Col className="mr-auto ml-auto" md="8">
                                        <h2 className="title">Simpler. Smarter. Faster.</h2>
                                        <h3 className="title">We’re Here For Your Custom Software Development & Design Needs.</h3>
                                        <h4 className="description">
                                            There are times an out of the box solution won’t meet your business needs or standards that exactly required. For these times, ALIEN INTERFACE team of highly skilled developers and highly experienced consultants can take that time to acknowledge and understand how your business works, and what it requires, to create custom software or apps for your organization by leveraging advanced technologies.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <div className="info info-hover">
                                            <div className="icon icon-success icon-circle">
                                                <i className="now-ui-icons objects_globe"></i>
                                            </div>
                                            <h4 className="info-title">Blockchain</h4>
                                            <p className="description">
                                                The Blockchain is a distributed ledger that includes the transaction details, records
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="info info-hover">
                                            <div className="icon icon-info icon-circle">
                                                <i className="now-ui-icons tech_watch-time"></i>
                                            </div>
                                            <h4 className="info-title">Mobility</h4>
                                            <p className="description">
                                                CloudCheckr provides summary and detailed usage
                                                statistics for resources.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="info info-hover">
                                            <div className="icon icon-primary icon-circle">
                                                <i className="now-ui-icons education_atom"></i>
                                            </div>
                                            <h4 className="info-title">AI and IoT Solutions</h4>
                                            <p className="description">
                                                CloudCheckr enables users to save money, time, and
                                                effort.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="separator-line bg-info"></div>
                    <div className="projects-5">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto text-center" md="8">
                                    <h2 className="title">Blockchain Technology</h2>
                                    <h4 className="description">
                                        The Blockchain is a distributed ledger that includes the transaction details, records, and its information by utilizing cryptography based technologies. It provides a stable and secured transaction that helps to protect and prevent hacking and secure the data alteration. To describe it in technical terms, blockchain is abiding and immutable.
                                    </h4>
                                    <div className="section-space"></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto" md="5">
                                    <Card
                                        className="card-background card-background-product card-raised"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/what-we-do.jpg") + ")",
                                        }}
                                    >
                                        <CardBody>
                                            <CardTitle tag="h2">What We Do ?</CardTitle>
                                            <p className="card-description">
                                                We at ALIEN INTERFACE will help you in implementation of Blockchain technology software development, application development, implementation of Blockchain framework in your existing solutions or Blockchain consulting by our experienced professionals.
                                            </p>
                                            {/* <Badge className="badge-neutral">Analytics</Badge> */}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className="mr-auto" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-danger">
                                            <i className="now-ui-icons ui-2_chat-round"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">
                                                Artificial intelligence
                                            </h4>
                                            <p className="description">
                                                Artificial intelligence (AI), is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality. The distinction between the former and the latter categories is often revealed by the acronym chosen. 'Strong' AI is usually labelled as AGI (Artificial General Intelligence) while attempts to emulate 'natural' intelligence have been called ABI (Artificial Biological Intelligence). Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col className="ml-auto mt-5" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-warning">
                                            <i className="now-ui-icons users_single-02"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Internet Of Things</h4>
                                            <p className="description">
                                                The Internet of things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet.
                                                We at ALIEN INTERFACE will help you in implementation of IoT technology software development, application development, implementation of IoT framework in your existing solutions or IoT consulting by our experienced professionals.

                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mr-auto" md="5">
                                    <Card
                                        className="card-background card-background-product card-raised"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/ai.jpg") + ")",
                                        }}
                                    >
                                        <CardBody>
                                            <CardTitle tag="h2">AI & ML Technology.</CardTitle>
                                            <p className="card-description text-white">
                                                We at ALIEN INTERFACE will help you in implementation of AI & ML technology software development, application development, implementation of AI & ML framework in your existing solutions or AI & ML consulting by our experienced professionals.
                                            </p>
                                            <Badge className="badge-neutral">Trello</Badge>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div 
                    className="about-contact section-image"
                    style={{
                            backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
                        }} >
                        <Container>
                            <Row>
                                <Col className="mr-auto ml-auto" md="12">
                                    <h2 className="text-center title text-white">Other Technology & Software Implementation</h2>
                                    <h4 className="text-center description text-white">
                                    <strong>Businesses of any shape or size can benefit from customized software. The following are tangible benefits of custom software development for small businesses:</strong>
                                    </h4>
                                    <p className="text-center description text-white">
                                        Custom software development can streamline business processes, helping your business to be more efficient as a team to reach your particular business goals, vision, mission and motivate your employees along with your customers. Our customized software solutions will make scaling for the future easier by giving you the right foundations for growth using technologies. Custom software development can improve the way you reach out to your customers. In turn, it helps you deliver your business goals. Mundane and repetitive tasks can be automated, freeing up your staff to focus on more pressing, important work.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Services;
