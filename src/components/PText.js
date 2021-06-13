import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 580px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3rem;
    @media only screen and (max-width: 768px){
        font-size: 1.4rem;
    }
`;

const PText = (props) => {
    console.log(props)
    return (
        <PStyle>
            <p>{props.children}</p>
        </PStyle>
    );
};

export default PText;