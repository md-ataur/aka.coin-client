import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import guide1 from '../../../images/guide1.png';
import guide2 from '../../../images/guide2.png';
import guide3 from '../../../images/guide3.png';
import guide4 from '../../../images/guide4.png';
import './SectionThree.css';

const SectionThree = () => {
    return (
        <Container className="section-three">
            <h2 className="section-title">Quick Start Guide</h2>
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <div className="guide">
                        <div>
                            <img src={guide1} alt="" />
                        </div>
                        <div>
                            <h3>1. Create a wallet</h3>
                            <p>
                                Create a Wallet using either a desktop computer or an mobile device
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="guide">
                        <div>
                            <img src={guide2} alt="" />
                        </div>
                        <div>
                            <h3>2. Buy ETH</h3>
                            <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="guide">
                        <div>
                            <img src={guide3} alt="" />
                        </div>
                        <div>
                            <h3>3. Connect your wallet</h3>
                            <p>Access your wallet to AoaSwap by clicking ‘Connect to a wallet’</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="guide">
                        <div>
                            <img src={guide4} alt="" />
                        </div>
                        <div>
                            <h3>4. Swap ETH to AKO</h3>
                            <p>
                                You can start swapping as you have ETH available! Press ‘Select a
                                token’
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionThree;
