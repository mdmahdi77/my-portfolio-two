import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTilte from './SectionTilte';

const ContactSectionStyle = styled.div`
        padding: 10rem 0;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
      }
      .left {
        width: 100%;
        max-width: 500px;
      }
      .right {
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
        /* padding-left: 3rem; */
      }
      @media only screen and (max-width: 768px) {
        .contactSection__wrapper {
          flex-direction: column;
        }
        .contactSection__wrapper::after {
          display: none;
        }
        .left,
        .right {
          max-width: 100%;
        }
        .right {
          padding: 4rem 2rem 2rem 2rem;
        }
      }
`;

const ContactSection = () => {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTilte heading="Contact" subHeading="Get In Touch"></SectionTilte>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem
                            icon = {<MdLocalPhone></MdLocalPhone>}
                            text = "+08801776875449"
                        ></ContactInfoItem>
                        <ContactInfoItem
                            icon = {<MdEmail></MdEmail>}
                            text = "mehedihasanibnc@gamil.com"
                        ></ContactInfoItem>
                        <ContactInfoItem
                            text = "Rajshahi, Bangladesh"
                        ></ContactInfoItem>
                    </div>
                    <div className="right">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    );
};

export default ContactSection;