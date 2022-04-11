import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import devResource2Img from '../../../images/dev-resource2.png';
import './SectionFour.css';

const SectionFour = () => {
    return (
        <Container className="section-four">
            <Row>
                <Col xs={12} md={12} lg={3}>
                    <div className="card card-left">
                        <div>
                            <div className="card-title">
                                <h3>Become a Validator</h3>
                            </div>
                            <p>
                                Help secure the network by running decentralized infrastructure.
                                Learn about operating a validator node.
                            </p>
                        </div>
                        <div className="card-btn">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={4}>
                    <div className="card card-middle">
                        <div>
                            <div className="card-title">
                                <h3>Akacoin Community</h3>
                            </div>
                            <p>
                                Start exploring blockchain applications in seconds. Trusted by over
                                1 million users worldwide
                            </p>
                        </div>
                        <div className="card-btn">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={5}>
                    <div className="card card-right">
                        <div>
                            <div className="card-title">
                                <h3>Dev. Resource</h3>
                            </div>
                            <p>
                                See the get started guide, videos, tutorials, SDKs, reference
                                implementations, and more.
                            </p>
                            <div className="ResourceImg">
                                <img src={devResource2Img} alt="" />
                            </div>
                        </div>
                        <div className="card-btn">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionFour;
