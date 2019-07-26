import React from 'react';
import styled from 'styled-components';
import {
    Navbar, Nav, NavDropdown
} from 'react-bootstrap';
import logo from '../images/brand.svg';
import './Navigation.scss';




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
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle className="Navbar_Toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <SHNavLink href="#home">Home</SHNavLink>
                    <SHNavLink href="#link">SNS Link</SHNavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </SHNavbar>
    );
  }
}
