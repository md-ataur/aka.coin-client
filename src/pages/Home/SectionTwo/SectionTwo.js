import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BsArrowRight, BsDisplay, BsGlobe2, BsPhone } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SectionTwo.css';

const SectionTwo = () => {
    const [loading, setLoading] = useState(true);
    const [wallets, setWallets] = useState([]);

    // Data read from the server
    useEffect(() => {
        fetch('https://infinite-depths-07881.herokuapp.com/wallet')
            .then((res) => res.json())
            .then((data) => setWallets(data))
            .finally(() => {
                setLoading(false);
            });
    }, [wallets]);

    return (
        <Container className="section-two">
            {loading && <h3 className="text-center">Loading...</h3>}
            {!loading && (
                <>
                    <h2 className="section-title">Choose Your Wallets</h2>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper"
                    >
                        {wallets.map((wallet) => (
                            <SwiperSlide key={wallet._id}>
                                <div
                                    className="wallet-card"
                                    style={{
                                        backgroundImage: `url(${wallet.bgImage})`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <div>
                                        <div className="wallet-title">
                                            <img src={wallet.imageIcon} alt="" />
                                            <h3 style={{ color: wallet.color }}>{wallet.title}</h3>
                                        </div>
                                        <p style={{ color: wallet.color }}>{wallet.description}</p>
                                        <div className="wallet-icon">
                                            <span style={{ color: wallet.color }}>
                                                <BsPhone />
                                            </span>
                                            <span style={{ color: wallet.color }}>
                                                <BsDisplay />
                                            </span>
                                            <span style={{ color: wallet.color }}>
                                                <BsGlobe2 />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="wallet-btn">
                                        <a href="#" style={{ color: wallet.color }}>
                                            Choose Wallet <BsArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                    </Swiper>
                    {/* <Row xs={1} md={2} lg={3}>
                        {wallets.map((wallet) => (
                            <Col key={wallet._id}>
                                <div
                                    className="wallet-card"
                                    style={{
                                        backgroundImage: `url(${wallet.bgImage})`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <div>
                                        <div className="wallet-title">
                                            <img src={wallet.imageIcon} alt="" />
                                            <h3 style={{ color: wallet.color }}>{wallet.title}</h3>
                                        </div>
                                        <p style={{ color: wallet.color }}>{wallet.description}</p>
                                        <div className="wallet-icon">
                                            <span style={{ color: wallet.color }}>
                                                <BsPhone />
                                            </span>
                                            <span style={{ color: wallet.color }}>
                                                <BsDisplay />
                                            </span>
                                            <span style={{ color: wallet.color }}>
                                                <BsGlobe2 />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="wallet-btn">
                                        <a href="#" style={{ color: wallet.color }}>
                                            Choose Wallet <BsArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row> */}
                </>
            )}
        </Container>
    );
};

export default SectionTwo;
