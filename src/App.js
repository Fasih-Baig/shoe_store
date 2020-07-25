import React, { useState, useEffect } from 'react';
import nike1 from './nike1.jpg';
import nike4 from './nike4.jpg';
import nike5 from './nike5.jpg';
import nike6 from './nike6.jpg';
import brandLogo from './icons/brandlogo.png';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Card, Button, Carousel, Dropdown } from 'react-bootstrap';
import { useTransition, animated, config } from 'react-spring';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Shoes from './shoe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import Footer from './footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbarClass">
          <Navbar.Brand href="#" style={{ color: "white" }}><img src={brandLogo} alt="brand" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Link to="/" className="navbarLink">HOME</Link>
              <Link to="/Products" className="navbarLink">PRRODUCTS</Link>
              <Link to="/" className="navbarLink">CART</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<Products />}>
            <Route path="/" element={<ProdIndex />} />
            <Route path=":slug" element={<ProdShoe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  const slides = [
    { id: 0, url: nike1 },
    { id: 1, url: nike4 },
    { id: 2, url: nike5 },
    { id: 3, url: nike6 },
  ]
  const arrImg = [];
  for(let i=0; i<8; i++){
    arrImg[i] = Shoes[i];
  } 
  const [index, set] = useState(0);
  const trans = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => {
      setInterval(() => {
        return set(state => (state + 1) % 4);
      }, 10000);
  }, []);
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container style={{ marginBottom: "20px" }}>
        <div style={{ height: "600px" }}>
          <Row>
            <Col xs={12}>
              {trans.map(({ item, props, key }) =>
                <animated.div key={key} className="homePage" style={{ ...props, backgroundImage: `url(${item.url})` }} />
              )
              }
              <h1 className="mainHeading">Nike Stunner</h1>
              <Link to={`./Products`}>
                <Button className="mainButton" variant="light">
                  Shop Here
              </Button>
              </Link>
            </Col>
          </Row>
        </div>
        <Row >
          <Col xs={12} className="homePage1">
            <hr className="colorGray"/>
            <p style={{ color: "gray" }}>where all <span style={{ color: "black" }}>atheletes</span> belongs</p>
            <hr className="colorGray"/>
          </Col>
        </Row>
        <h2 id="intro">Trending Now</h2>
        <Row>
          <Col xs={6} className="homePage2">
            <img src={arrImg[0].img} alt={arrImg[0].name} width="100%" height="550px"/>
          </Col>
          <Col xs={6} className="homePage3">
            <img src={arrImg[7].img} alt={arrImg[7].name} width="100%" height="550px" />
          </Col>
        </Row>
      </Container>
      <div>
      </div>
      <Footer />
    </div>
  );
}

function Products() {
  return (
    <div>
      <br />
      <Outlet />
    </div>
  );
}

function ProdIndex() {
  return (
    <div>
      <Container>
        <Row style={{ marginBottom: "10px" }}>
          {Object.entries(Shoes).map(([slug, { name, img }]) =>
            <Col xs={6} sm={4} md={4} lg={3} key={slug} style={{ marginBottom: "10px" }}>
              <Card border="dark" className="cardClass">
                <Card.Img variant="top" src={img} className="cardImg" />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Link to={`/Products/${slug}`} className="viewButton">
                    <Button variant="light" className="cardButton">
                      View
                </Button>
                  </Link>
                  <Button variant="light" className="cardButton">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

function ProdShoe() {
  const { slug } = useParams();
  const shoe = Shoes[slug];
  const [shoeIndex, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  if (!shoe) {
    return <h2>No Product Found!</h2>
  }
  const { name, img, img_1, img_2, price, desc } = shoe;
  return (
    <div>
      <Container>
        <Row style={{ marginBottom: "20px" }}>
          <Col xs={6}>
            <Carousel activeIndex={shoeIndex} onSelect={handleSelect} className="sliderBorder">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
                  height="500"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img_1}
                  alt="Second slide"
                  height="500"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img_2}
                  alt="Third slide"
                  height="500"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6}>
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <hr />
            <p>{desc}</p>
            <Dropdown>
              <Dropdown.Toggle variant="default" id="dropdown-basic">
                Select Size
              </Dropdown.Toggle>
              <Button variant="cart" size="md"><ShoppingCart fontSize="small" style={{ marginRight: "6px" }} />Add to Cart</Button>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">40</Dropdown.Item>
                <Dropdown.Item href="#/action-2">41</Dropdown.Item>
                <Dropdown.Item href="#/action-3">42</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;