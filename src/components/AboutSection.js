import React from 'react';
import SectionTilte from './SectionTilte';

const AboutSection = () => {
    return (
        <div>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTilte className="section-title" subHeading="Let Me Introduce Myself" heading="About Me"></SectionTilte>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;