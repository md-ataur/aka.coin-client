import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight, BsDisplay, BsGlobe2, BsPhone } from 'react-icons/bs';
import walletIcon1 from '../../../images/wallet-icon1.png';
import walletIcon2 from '../../../images/wallet-icon2.png';
import walletIcon3 from '../../../images/wallet-icon3.png';
import './SectionTwo.css';

const SectionTwo = () => {
    return (
        <Container className="section-two">
            <h2 className="section-title">Choose Your Wallets</h2>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <div className="wallet-card wallet-left">
                        <div>
                            <div className="wallet-title">
                                <img src={walletIcon1} alt="" />
                                <h3>AkaWallet</h3>
                            </div>
                            <p>
                                Start exploring blockchain applications in seconds. Trusted by over
                                1 million users worldwide
                            </p>
                            <div className="wallet-icon">
                                <span>
                                    <BsPhone />
                                </span>
                                <span>
                                    <BsDisplay />
                                </span>
                                <span>
                                    <BsGlobe2 />
                                </span>
                            </div>
                        </div>
                        <div className="wallet-btn">
                            <a href="#">
                                Choose Wallet <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="wallet-card wallet-middle">
                        <div>
                            <div className="wallet-title">
                                <img src={walletIcon2} alt="" />
                                <h3>AkaSafe</h3>
                            </div>
                            <p>
                                AkaSafe wallet is a secure, decentralized, easy-to-use, and free
                                application to manage more than 10,000 cryptocurrencies.
                            </p>
                            <div className="wallet-icon">
                                <span>
                                    <BsPhone />
                                </span>
                                <span>
                                    <BsDisplay />
                                </span>
                                <span>
                                    <BsGlobe2 />
                                </span>
                            </div>
                        </div>
                        <div className="wallet-btn">
                            <a href="#">
                                Choose Wallet <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="wallet-card wallet-left">
                        <div>
                            <div className="wallet-title">
                                <img src={walletIcon3} alt="" />
                                <h3>AkaMask</h3>
                            </div>
                            <p>
                                AkaMask is a decentralized multi-chain digital wallet, dedicated to
                                providing safe and convenient one-stop digital asset management
                                services to users around the world.
                            </p>
                            <div className="wallet-icon">
                                <span>
                                    <BsPhone />
                                </span>
                                <span>
                                    <BsDisplay />
                                </span>
                                <span>
                                    <BsGlobe2 />
                                </span>
                            </div>
                        </div>
                        <div className="wallet-btn">
                            <a href="#">
                                Choose Wallet <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionTwo;
