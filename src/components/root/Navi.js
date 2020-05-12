import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import AdminNavi from './AdminNavi';



class Navi extends React.Component {
  AuthNavi() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>Poldy İnsan Kaynakları</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/login">Giriş Yap</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/register">Kayıt Ol</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
 
  AdminNavi(){
    const items = [
      { name: 'home', label: 'Home' ,to:"/"},
    ]
    return (
      <AdminNavi items={items}/>
    );
  };
  UserNavi() {
    return <div></div>;
  }

  render() {
    if (localStorage.getItem("rank") === "true") {
      return this.AdminNavi(this.props);
    } else if (localStorage.getItem("rank") === "false") {
      return this.UserNavi();
    } else {
      return this.AuthNavi();
    }
  }
}

export default Navi;
