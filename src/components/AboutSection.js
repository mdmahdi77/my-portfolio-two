import React from 'react';
import PText from './PText';
import SectionTilte from './SectionTilte';
import Button from './Button';
import AboutImg from '../assets/images/about2.png'
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right {
    flex: 1;
    }
    .section-title {
    text-align: left;
    }
    .para {
    margin-top: 2rem;
    margin-left: 0;
    }
    .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    }
    @media only screen and (max-width: 950px) {
        .aboutSection__left {
          flex: 4;
        }
        .aboutSection__right {
          flex: 3;
        }
      }
      @media only screen and (max-width: 768px) {
        .container {
          flex-direction: column;
          text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right {
          width: 100%;
        }
        .aboutSection__right {
          margin-top: 3rem;
        }
        .section-title {
          text-align: center;
        }
        .para {
          margin: 0 auto;
          margin-top: 2rem;
        }
        .aboutSection__buttons {
          flex-direction: column;
          gap: 0rem;
          .button-wrapper,
          a {
            width: 100%;
            text-align: center;
          }
        }
      }
`;

const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTilte subHeading="Let Me Introduce Myself" heading="About Me"></SectionTilte>
                    <PText>I am a frontend web developer from Rajshahi,
                            Bangladesh. I create mern stack websites. I love art and always
                            try to show unique views to the audience through my design.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button btnLink="/projects" btnText="Works"></Button>
                        <Button btnLink="/about" btnText="Read More" outLine></Button>
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;