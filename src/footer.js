import React from 'react';
import { Row, Col } from 'react-bootstrap';
import amazon from './icons/amazon.png';
import mastercard from './icons/mastercard.png';
import visa from './icons/visa.png';

export default function Footer() {
    return (
        <div className="footer">
            <Row style={{ paddingTop: "20px", margin: "0px" }}>
                <Col xs={6}>
                    <Row>
                        <Col xs={4}>
                            <div>
                                <p>FIND STORE</p>
                                <p>BECOME MEMBER</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <ul className="listStyle">
                                <li>GET HELP</li>
                                <li><a href="/">Order Status</a></li>
                                <li><a href="/">Delivery</a></li>
                                <li><a href="/">Return</a></li>
                                <li><a href="/">Payment</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col xs={4}>
                            <ul className="listStyle">
                                <li>ABOUT NIKE</li>
                                <li><a href="/">News</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Investors</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3}>
                </Col>
                <Col xs={3}>
                    <Row>
                        <Col xs={12} sm={6} md={4} style={{ marginBottom: "10px" }}>
                            <a href="/"><img src={visa} alt="visa" /></a>
                        </Col>
                        <Col xs={12} sm={6} md={4} style={{ marginBottom: "10px" }}>
                            <a href="/"><img src={mastercard} alt="mastercard" /></a>
                        </Col>
                        <Col xs={12} sm={12} md={4} style={{ marginBottom: "10px" }}>
                            <a href="/"><img src={amazon} alt="amazon" /></a>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    );
}