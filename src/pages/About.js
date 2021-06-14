import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about3.png'
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import resume from '../assets/resume/resume-8.pdf'
import { Link } from 'react-router-dom';

const AboutPageStyles = styled.div`
    padding: 20rem 0 0 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
        .resume{
            font-size: 1.5rem;
            background-color: var(--gray-1);
            color: black;
            padding: 0.5rem 1.5rem;
            border-radius: 8px;
        }
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    span {
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius: 8px;
    }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
    .para {
        max-width: 100%;
    }
    }
    .right {
    img {
        height: 500px;
    }
    }
    .about__info__items {
        margin-top: 15rem;
      }
      .about__info__item {
        margin-bottom: 10rem;
      }
      .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
      }
      @media only screen and (max-width: 768px) {
        padding: 10rem 0 0 0;
        .top-section {
          flex-direction: column;
          gap: 5rem;
        }
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 2.8rem;
        }
        .about__info__heading {
          font-size: 3rem;
        }
      }
`;

const About = () => {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Mehedi Hasan</span>
                        </p>
                        <h2 className="about__heading">A frontend Web developer</h2>
                        <div className="about__info">
                            <PText>
                                I am from Rajshahi, Bangladesh. A place of beauty and
                                nature. Since my childhood, i love art and design. I always
                                try to design stuff with my unique point of view. I also love
                                to create things that can be usefull to others.
                                <br /> <br />
                                I started coding since I was in high school. Coding is also an
                                art for me. I love it and now I have the opportunity to design
                                along with the coding. I find it really interesting and I
                                enjoyed the process a lot.
                                <br />
                                <br />
                                My vision is to make the world a better place. Now almost
                                everything is becoming better than ever. It is time for us to
                                create more good stuff that helps the world to become a better
                                place.
                            </PText>
                        </div>
                            <Link className="resume" to={`${resume}`} target="_blank" download>Download CV</Link>
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="me" />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">Education</h1>
                        <AboutInfoItem
                            title="School"
                            items={['Mirjapur High School And College, Rajshahi.']}
                        />
                        <AboutInfoItem
                            title="Collage"
                            items={['Varendra College Rajshahi, Bangladesh']}
                        />
                        <AboutInfoItem
                            title="Grduate"
                            items={['Islami Bank Nursing College, Rajshahi']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skills</h1>

                        <AboutInfoItem
                            title="FrontEnd"
                            items={['HTML', 'CSS', 'BootStrap', 'JavaScript', 'REACT']}
                        />
                        <AboutInfoItem
                            title="BackEnd"
                            items={['Node', 'Express', 'MongoDb']}
                        />
                        <AboutInfoItem
                            title="Others"
                            items={['Material UI', 'React Redux', 'Firebase Authentication and deploy', 'Netlify', 'Heroku']}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner></ContactBanner>
            <Footer></Footer>
        </AboutPageStyles>
    );
};

export default About;