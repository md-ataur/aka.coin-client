import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiFacebookCircleFill, RiGithubFill, RiInstagramLine, RiRedditFill } from 'react-icons/ri';
import footerLogo from '../../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <Container>
            <div className="footer-section">
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <div className="footer-left mb-3">
                            <div className="mb-3">
                                <img src={footerLogo} alt="" />
                            </div>
                            <p>
                                Living Ecosystem <br />
                                Decentralized Token
                            </p>
                            <div className="footer-icon">
                                <span>
                                    <RiGithubFill />
                                </span>
                                <span>
                                    <RiRedditFill />
                                </span>
                                <span>
                                    <RiFacebookCircleFill />
                                </span>
                                <span>
                                    <RiInstagramLine />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={8} lg={8} className="footer-right">
                        <Row xs={1} md={4} lg={4}>
                            <Col>
                                <div className="footer-navlink">
                                    <h3>Pages</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Network Statistic</a>
                                        </li>
                                        <li>
                                            <a href="#">What is AkaCoin</a>
                                        </li>
                                        <li>
                                            <a href="#">Wallets</a>
                                        </li>
                                        <li>
                                            <a href="#">Quick Start Guide</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-navlink">
                                    <h3>Learn</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Video</a>
                                        </li>
                                        <li>
                                            <a href="#">Podcast</a>
                                        </li>
                                        <li>
                                            <a href="#">Network states</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-navlink">
                                    <h3>Support</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Custommer Service</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Community</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-navlink">
                                    <h3>About AKA.Coin</h3>
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Term of use</a>
                                        </li>
                                        <li>
                                            <a href="#">Cookie policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="copyright">
                    <p>©2022 AKA.COIN. All right reserved</p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
