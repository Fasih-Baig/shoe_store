import React from 'react';
import nike1 from './nike1.jpg';
import nike4 from './nike4.jpg';
import nike5 from './nike5.jpg';
import nike6 from './nike6.jpg';
import nike7 from './nike7.jpg';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import Shoes from './shoe';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar variant="light" className="navbarClass">
                    <Navbar.Brand href="#" style={{ color: "white" }}><img src="" alt="" /><h3 style={{ display: "inline-block", marginLeft: "20px" }}>NIKE</h3></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/" className="navbarLink">Home</Link>
                        <Link to="/Products" className="navbarLink">Products</Link>
                    </Nav>
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
function changeImagesBG() {
    const Images = [nike1, nike4, nike5, nike6, nike7];
    setInterval(() => {
        let Imgurl = Images[Math.floor(Math.random() * Images.length)];
        document.getElementById("homePage").style.backgroundImage = `url(${Imgurl})`;
        // document.getElementById("homePage").src = Imgurl;
        console.log(Imgurl);
    }, 10000);
};
changeImagesBG();

function Home() {
    return (
        <div>
            <Row>
                <Col xs={12} id="homePage">
                    <h1 className="mainHeading">Nike Stunner</h1>
                    <Button className="mainButton" variant="light">
                        <Link to={`./Products`} className="viewButton">Shop Here</Link>
                    </Button>
                </Col>
            </Row>
            <Row >
                {/* <Col xs={2} style={{ backgroundColor:"#2d2b40"}}></Col> */}
                <Col xs={8} className="homePage1">
                    <q>Where All<br /><span style={{ color: "#2d2b40" }}>ATHELETES</span><br />Belongs</q>
                </Col>
                {/* <Col xs={2} style={{ backgroundColor:"#2d2b40"}}></Col> */}
            </Row>
            <Row>
                <Col xs={8} className="homePage2">
                    <q className="intro">For once,<br />Don't do it</q>
                </Col>
                <Col xs={4} className="homePage3">
                </Col>
            </Row>
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
        <Container>
            <Row>
                {Object.entries(Shoes).map(([slug, { name, img }]) =>
                    <Col xs={6} sm={4} md={4} lg={3} key={slug} style={{ marginBottom: "10px" }}>
                        <Card border="dark" className="cardClass">
                            <Card.Img variant="top" src={img} className="cardImg" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="light" className="cardButton">
                                    <Link to={`/Products/${slug}`} className="viewButton">View</Link>
                                </Button>
                                <Button variant="light" className="cardButton">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

function ProdShoe() {
    const { slug } = useParams();
    const shoe = Shoes[slug];
    if (!shoe) {
        return <h2>No Product Found!</h2>
    }
    const { name, img } = shoe;
    return (
        <Container>
            <div style={{ textAlign: "center" }}>
                <h2>{name}</h2>
                <img src={img} alt={name} height="500" />
            </div>
        </Container>
    );
}
