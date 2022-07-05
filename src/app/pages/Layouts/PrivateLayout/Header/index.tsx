/**
 *
 * Header
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Collapse,
  Container, DropdownItem, DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  Button,
} from "reactstrap";
import Avatar from "../../../../../assets/avatar.png";
import Logo from "../../../../../assets/logo.png";
import Drop from "../../../../../assets/drop.png";
import { BrowserRouter, Link, Redirect, Route, useHistory } from "react-router-dom";
import { Logout } from "../../../Auth/Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useAuthSlice } from "../../../../redux/Auth/slice";
import { useEffect } from "react";
import { selectAuth, selectAuthUser } from "../../../../redux/Auth/slice/selectors";

interface Props { }

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { actions } = useAuthSlice();
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    const user = localStorage.removeItem('Login');
    dispatch(actions.logout());
    history.push('/');
    // window.location.reload();
  }
  const goToDashboard = () =>{
    history.push('/dashboard');
    window.location.reload();
  }
  const goToApi = () =>{
    history.push('/api');
    window.location.reload();
  }
  const goToAffiliates = () =>{
    history.push('/affiliates');
    window.location.reload();
  }
  const goToOrder = () =>{
    history.push('/systemorders');
    window.location.reload();
  }
  const goToResult = () =>{
    history.push('/systemresults');
    window.location.reload();
  }
  const goToSummary = () =>{
    history.push('/systemsummary');
    window.location.reload();
  }
  const goToHistory = () =>{
    history.push('/systemhistory');
    window.location.reload();
  }
  const goToSupport = () =>{
    history.push('/supportmaterial');
    window.location.reload();
  }
  const goToServices = () =>{
    history.push('/customerservice');
    window.location.reload();
  }
  const goToOrders = () =>{
    history.push('/');
    window.location.reload();
  }
  const goToMyAccount = () =>{
    history.push('/myaccount');
    window.location.reload();
  }
  const goToMyAccountForm = () =>{
    history.push('/myaccountform');
    window.location.reload();
  }
  const goToTelegram = () =>{
    history.push('/myaccounttelegram');
    window.location.reload();
  }
  const goToFinancialCommission = () =>{
    history.push('/financialcommission');
    window.location.reload();
  }
  const goToFinancialCharges = () =>{
    history.push('/financialcharges');
    window.location.reload();
  }
  return (
    <div>
      <header className="private-header d-flex align-items-center">

        <Container fluid="xl">
          <Navbar expand="xl">
            <NavbarBrand href="/">
              <img src={Logo} alt="Binance+io" width="100%" height="100%" />
            </NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="nav-cls" navbar>
                <NavItem>
                  <a href="/" className="anchor">Home</a>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown className="nav-drop anchor">
                    <DropdownToggle className="for-hovr">
                      <span className="for-hovr-elemnt">System</span>
                      <span className="ms-2">
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z" fill="white" />
                          </svg>
                        </span>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={goToDashboard}>Dashboard</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToApi}>Activation</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToOrder}>Orders</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToResult}>Result</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToSummary}>Summary</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToHistory}>History General</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown className="nav-drop anchor">
                    <DropdownToggle className="for-hovr">
                      <span className="for-hovr-elemnt">Financial</span>
                      <span className="ms-2">
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z" fill="white" />
                          </svg>
                        </span>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={goToFinancialCommission}>Commissions</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToFinancialCharges}>Charges</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <Button onClick={goToAffiliates} className="anchor">Affiliates</Button>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown className="nav-drop anchor">
                    <DropdownToggle className="for-hovr">
                      <span className="for-hovr-elemnt">Support</span>
                      <span className="ms-2">
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z" fill="white" />
                          </svg>
                        </span>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={goToServices}>Customer Service</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToSupport}>Support Material</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Nav>
              <div className="account">
                <NavItem>
                  <UncontrolledDropdown className="nav-drop anchor">
                    <DropdownToggle className="for-hovr">
                      <div className="for-hovr-elemnt user-name">{user ? (<>{user?.userName}</>) : 'My Account'}</div>
                      <span className="ms-2">
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z" fill="white" />
                          </svg>
                        </span>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={goToMyAccount}>My Data</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={goToTelegram}>Telegram</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </div>
              {/* <div className="auth-link d-flex align-items-center" >
                  <img src={Avatar} alt="Binance+io" width="100%" height="100%" className="avatar" /> */}
              {/*<Link to='/login' className="user-cls">Randy S.</Link>*/}

              {/* <UncontrolledDropdown className="nav-drop for-hovr">
                    <span className="user-cls">{user?.userName}</span>
                    <DropdownToggle className="">
                          <span className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z" fill="white"/>
                            </svg>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                     
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={()=> logout()}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div> */}
            </Collapse>
          </Navbar>
        </Container>

      </header>

    </div>
  );

};
