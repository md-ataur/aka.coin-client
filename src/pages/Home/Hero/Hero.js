import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { RiGithubFill } from 'react-icons/ri';
import intro from '../../../images/intro.png';
import './Hero.css';

const Hero = () => {
    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data read from the server
    useEffect(() => {
        fetch('https://infinite-depths-07881.herokuapp.com/hero')
            .then((res) => res.json())
            .then((data) => setHeros(data))
            .finally(() => {
                setLoading(false);
            });
    }, [heros]);

    return (
        <div className="hero-section">
            <Container>
                {loading && <h3 className="text-center">Loading...</h3>}

                {!loading && (
                    <>
                        {heros.map((hero) => (
                            <div key={hero._id} className="hero">
                                <div className="hero-left">
                                    <div className="mb-3">
                                        <img src={intro} alt="" />
                                    </div>
                                    <h1>{hero.title}</h1>
                                    <p>{hero.subtitle}</p>
                                    <div className="hero-btn-area">
                                        <button className="hero-btn btn-blue">Get Started</button>
                                        <button className="hero-btn btn-white">
                                            <RiGithubFill
                                                style={{ width: '23px', height: '23px' }}
                                            />
                                            <span>Source</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="hero-right">
                                    <img src={hero.image} alt="" />
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </Container>
        </div>
    );
};

export default Hero;
