import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection'
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
            <ProjectSection></ProjectSection>
            <TestimonialsSection></TestimonialsSection>
            <ContactBanner></ContactBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;