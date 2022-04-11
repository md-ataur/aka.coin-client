import React from 'react';
import { Container } from 'react-bootstrap';
import { RiGithubFill } from 'react-icons/ri';
import heroImg from '../../../images/hero-img1.png';
import intro from '../../../images/intro.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero">
                    <div className="hero-left">
                        <div className="mb-3">
                            <img src={intro} alt="" />
                        </div>
                        <h1>Living Ecosystem Decentralized Token</h1>
                        <p>
                            Akacoin is a open source peer-to-peer digital currency,community-run
                            technology that supports cryptocurrencies and thousands of decentralized
                            applications.
                        </p>
                        <div className="hero-btn-area">
                            <button className="hero-btn btn-blue">Get Started</button>
                            <button className="hero-btn btn-white">
                                <RiGithubFill style={{ width: '23px', height: '23px' }} />
                                <span>Source</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
