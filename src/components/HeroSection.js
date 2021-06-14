import React from 'react';
import mehedi from '../assets/images/mehedi.png'
import Button from './Button';
import PText from './PText';
import socialMediaArrow from '../assets/images/social-media-arrow.svg'
import scrollDownArrow from '../assets/images/scroll-down-arrow.svg'
import styled from 'styled-components';

const HeroStyle = styled.div`
    .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
          display: inline-block;
          width: 100%;
        }
        .hero__name {
          font-family: 'Montserrat SemiBold';
          font-size: 7rem;
          color: var(--white);
        }
      }
      .hero__img {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
      }
      .hero__info {
        margin-top: -18rem;
      }
      .hero_social,
      .hero_scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
      }
      .hero_social {
        left: 50px;
      }
      .hero_scrollDown {
        right: 50px;
      }
    .hero_social_indicator,
    .hero_scrollDown {
        width: 50px;
        p {
        font-size: 1.6rem;
        transform: translateY(-70px) rotate(90deg);
        letter-spacing: 0.7rem;
        text-transform: uppercase;
        }
        img {
        max-height: 45px;
        width: 16px;
        margin: 0 auto;
        object-fit: contain;
        }
    }
    .hero_scrollDown {
        img {
        max-height: 70px;
        }
    }
    .hero__social__text {
        ul {
          li {
            margin-bottom: 1rem;
            a {
              display: inline-block;
              font-size: 1.6rem;
              transform: rotate(-90deg);
              letter-spacing: 5px;
              margin-bottom: 2rem;
            }
          }
        }
      }
      @media only screen and (max-width: 768px) {
        .hero {
          min-height: 750px;
        }
        .hero__heading {
          font-size: 1.4rem;
          margin-bottom: -3rem;
          .hero__name {
            font-size: 4.5rem;
          }
        }
        .hero__img {
          height: 300px;
        }
        .hero__info {
          margin-top: 3rem;
        }
        .hero_social {
          left: 0px;
          bottom: -15%;
          width: 20px;
          .hero_social_indicator {
            width: 20px;
            p {
              font-size: 1.2rem;
            }
            img {
              max-height: 22px;
            }
          }
          .hero__social__text {
            ul {
              li {
                a {
                  font-size: 1.2rem;
                  margin-bottom: 1rem;
                }
              }
            }
          }
        }
        .hero_scrollDown {
          right: 0;
          width: 20px;
          gap: 1rem;
          p {
            font-size: 1.3rem;
          }
        }
      }  
`;

const HeroSection = () => {
    return (
        <HeroStyle>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello, This is</span>
                        <span className="hero__name">Mehedi Hasan</span>
                    </h1>
                    <div className="hero__img">
                        <img src={mehedi} alt="" />
                    </div>
                    <div className="hero__info">
                        <PText>I am working as a web designer and frontend web developer for 1
                        years. I love to design and make new web experiences for the
                        people.
                    </PText>
                        <Button btnLink="/projects" btnText="See My Works"></Button>
                    </div>
                    <div className="hero_social">
                        <div className="hero_social_indicator">
                            <p>Follow</p>
                            <img src={socialMediaArrow} alt="" />
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100006789187624" target="_blank" rel="noreferrer">FB</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/mehedi-hasan-389425211/" target="_blank" rel="noreferrer">LN</a>
                                </li>
                                <li>
                                    <a href="https://github.com/mdmahdi77" target="_blank" rel="noreferrer">GH</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero_scrollDown">
                        <p>Scroll</p>
                        <img src={scrollDownArrow} alt="" />
                    </div>
                </div>
            </div>
        </HeroStyle>
    );
};

export default HeroSection;