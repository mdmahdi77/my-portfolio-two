import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
    margin-top: 2rem;   
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
        props.outLine? "transparent" : "var(--gray-1)"
    };
    padding: 0.7rem 2rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => 
        props.outLine? "var(--gray-1)" : "black"
    };
  }
  @media only screen and (max-width: 768px) {
      .button{
          font-size: 1.8rem;
      }
  }
`;

const Button = ({ 
    btnLink="test", 
    btnText="test", 
    outLine= false
}) => {
  return (
    <ButtonStyle outLine={outLine}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
