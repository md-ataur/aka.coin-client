import React from 'react';
import Hero from '../Hero/Hero';
import SectionFive from '../SectionFive/SectionFive';
import SectionFour from '../SectionFour/SectionFour';
import SectionOne from '../SectionOne/SectionOne';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </>
    );
};

export default Home;
