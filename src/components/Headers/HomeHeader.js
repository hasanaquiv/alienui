import React from "react";

// reactstrap components
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    src: "url(" + require("assets/img/slider/slider01.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h1 className="title">Enterprise</h1>
          <h3 className="title">Blockchain, Mobility, AI and IoT Solutions</h3>
          <h4 className="description text-white">
          Our expert solutions helps businesses globally to top the world of the industry they serve 
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/slider/slider02.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Street Style: Couture.</h1>
          <h4 className="description text-white">
            See what Karlie Kloss, Tracee Ellis Ross and others wore between the
            shows...
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/slider/slider03.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h1 className="title">For Men With Style.</h1>
          <h4 className="description text-white">
            Shirts that actually fit? Check. Linen shorts? Yup. Those wider
            pants suddenly in style? Got them, too....
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
];

function HomeHeader() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <div className="page-header header-filter">
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: item.src,
                  }}
                ></div>
                <div className="content-center text-center">{item.content}</div>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="left carousel-control carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-right" />
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
    </>
  );
}

export default HomeHeader;
