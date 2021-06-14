import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
.projectItem__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projects_live_client_server{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
    span{
      background-color: var(--gray-1);
      font-size: 1.4rem;
      color: black;
      padding: 0.5rem 1.5rem;
      border-radius: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

const ProjectItem = ({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  live = "live site",
  code = "code link",
}) => {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="projects_live_client_server">
          <a href={live} target="_blank"><span>LiveSite</span></a>
          <a href={code} target="_blank"><span>Github</span></a>
        </div>
      </div>
    </ProjectItemStyles>
  );
};

export default ProjectItem;