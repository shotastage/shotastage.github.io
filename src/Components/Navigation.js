import React from 'react';
import styled from 'styled-components';
import {
    Navbar, Nav
} from 'react-bootstrap';
import logo from '../images/brand.svg';
import './Navigation.css';




const SHNavbar = styled(Navbar)`
    background: white !important;
    font-size: 1.5rem;
    font-weight: bold;
    color: #38393a;
    height: 4.5rem;

    @media (prefers-color-scheme: dark) {
        background: #1A1A1A !important;
    }
`;

const SHNavLink = styled(Nav.Link)`
    color: #38393a !important;

    @media (prefers-color-scheme: dark) {
        color: white !important;
    }
`;



export class Navigation extends React.Component {

  render() {

    return (
        <SHNavbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <SHNavLink href="#home">( Home,</SHNavLink>
                    <SHNavLink href="#link"> SNS Link,</SHNavLink>
                    <SHNavLink href="#link"> resume.id );</SHNavLink>

                </Nav>
            </Navbar.Collapse>
        </SHNavbar>
    );
  }
}
