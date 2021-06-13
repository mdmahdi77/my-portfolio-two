import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            & hover: {
                background-color: var(--deep-dark);
            }
        }
        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;
        }
        .active{
            color: var(--white)
        }
    }
    .mobile-menu-icon{
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 4rem;
        outline: none;
        display: none;
        *{
            pointer-events: none;
        }
    }
    .closeNavMenu{
        display: none;
    }
    @media only screen and (max-width: 768px){
        padding: 0;
        .mobile-menu-icon{
            display: block;
        }
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .navItems{
            --top: 1rem;
            background-color: var(--deep-dark);
            transition: 0.3s ease transform;
            padding: 2rem;
            width: 98%;
            max-width: 380px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavMenu{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }
    } 
`;

const NavMenu = () => {
    const [showNav, SetShowNav] = useState(false)
    return (
        <NavMenuStyles>
            <div
                className="mobile-menu-icon"
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyButton={() => SetShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu></MdMenu>
            </div>
            <ul className={!showNav ? "navItems hide-item" : "navItems"}>
                <div
                    className="closeNavMenu"
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyButton={() => SetShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose ></MdClose>
                </div>
                <li>
                    <NavLink to="/" exact
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyButton={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="about"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyButton={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyButton={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyButton={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
};

export default NavMenu;