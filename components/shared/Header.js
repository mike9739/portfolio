
"use strict"
import React from "react"
import Link from "next/link"
import '../../styles/main.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
     } from 'reactstrap';
//componente creado para reenderizar los botones de la navbar
const BsNavLink = (props)=>{
  const {route , title} = props
  return(
    <Link href={route}>
      <a className="nav-link port-navbar-link" > {title}</a>
    </Link>
  )
} 
//componente creado para el login
const Login = () =>{
  return(

    <span className="nav-link port-navbar-link clickable">Login</span>
  )
}    
const Logout = () =>{
  return(

    <span className="nav-link port-navbar-link clickable">Logout</span>
  )
}    
class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
              <NavbarBrand className="port-navbar-brand" href="/">MAVU</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className="port-navbar-item">
                    <BsNavLink route="/" title="Home" ></BsNavLink>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <BsNavLink route="/about" title="About" ></BsNavLink>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <BsNavLink route="/portfolios" title="Portfolios" ></BsNavLink>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <BsNavLink route="/blogs" title="Blog" ></BsNavLink>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <BsNavLink route="/cv" title="CV" ></BsNavLink>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <Login></Login>
                  </NavItem>
                  <NavItem className="port-navbar-item">
                    <Logout></Logout>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}
export default Header;