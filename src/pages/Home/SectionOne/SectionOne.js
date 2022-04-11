import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import middle1 from '../../../images/middle1.png';
import middle2 from '../../../images/middle2.png';
import './SectionOne.css';

const SectionOne = () => {
    return (
        <Container className="section-one">
            <h2 className="section-title">What Is Akacoin?</h2>
            <Row>
                <Col xs={12} md={12} lg={5}>
                    <h3>The fastest growing and community friendly</h3>
                </Col>
                <Col xs={12} md={12} lg={7}>
                    <p>
                        Akacoin is the fastest blockchain in the world and the fastest growing
                        ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3
                        and more.
                    </p>
                    <div className="explore-btn">
                        <a href="#">
                            Explore Ecosystem <BsArrowRight />
                        </a>
                    </div>
                </Col>
            </Row>
            <div className="middle-section-image">
                <div className="middle-left-img">
                    <img src={middle1} alt="" />
                </div>
                <div>
                    <img src={middle2} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default SectionOne;
