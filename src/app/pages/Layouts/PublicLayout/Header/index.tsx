/**
 *
 * Header
 *
 */
import * as React from 'react';
import { BrowserRouter, Link, useHistory, Route, Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container
} from 'reactstrap';
import Logo from 'assets/logo.png';

interface Props { }

export function Header(props: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();

    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
    let tagPath = window.location.pathname;

    let history = useHistory();

    const goToRegister = () => {
        history.push('/register')
    }
    const goToLogin  = () =>{
        history.push('/login')
    }
    return (
        <BrowserRouter >
            <header id="public-header" className={tagPath === '/' ? 'ph-bg-tr' : 'ph-bg'} >
                <Container>
                    <Navbar expand="xl">
                        <NavbarBrand href="/">
                            <img src={Logo} alt="Logo" width="100%" height="100%" />
                        </NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            {tagPath === '/' ?
                                <>
                                    <Nav className="m-auto" navbar>
                                        <li>
                                            {/*<Link to="/cart">Styled On Friday</Link>*/}
                                            <NavLink to="/cart" >Styled On Friday</NavLink>
                                        </li>
                                        <NavItem>
                                            <a href="#benefits">Content</a>
                                        </NavItem>
                                        <NavItem>
                                            <a href="#zero-loss">Shop</a>
                                        </NavItem>
                                        <NavItem>
                                            <a href="/register">Search </a>
                                        </NavItem>
                                    </Nav>
                                </> : null}
                            {tagPath === '/login' ?
                                (<div className="auth-link">
                                    <button onClick={goToRegister}>Register</button>
                                </div>) : null}
                                {tagPath === '/register' || tagPath === '/' || tagPath === '/forgotpassword' || tagPath === '/changepassword' || tagPath==='/ready_to_go' ?
                                (<div className="auth-link">
                                    <button onClick={goToLogin}>Login</button>
                                </div>) : null}
                        </Collapse>
                    </Navbar>
                </Container>

            </header>
        </BrowserRouter>
    );
};

