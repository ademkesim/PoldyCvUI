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
import { connect } from "react-redux";
import UserNavi from "./UserNavi";


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
      {},
      { name: 'home', label: 'Anasayfa' ,to:"/"},
      { name:'added-admin',label:'Admin Ekle',to:"/add-admin"},
      { name:'applies',label:'Başvurular',to:"/applies"},
      { name:'added-department',label:'Departman Ekle',to:"/add-department"},
      { name:'added-title',label:'Ünvan Ekle',to:"/add-title"},
    ]
    return (
      <AdminNavi items={items}/>
    );
  };

  UserNavi() {
    const items = [
      {},
      { name: 'home', label: 'Anasayfa' ,to:"/"},
      { name:'addcv',label:'Cv Ekle',to:"/addcv"},
      { name:'applyidlist',label:'Başvurularım',to:"/applyid"},
      { name: 'addapply', label:"Başvuru Oluştur",to:"/add-apply"}
    ]
    return (
      <UserNavi items={items}/>
    );
  }

  render() {
    if (this.props.auth.user.rank === true) {
      return this.AdminNavi();
    } else if (this.props.auth.user.rank === false) {
      return this.UserNavi();
    } else {
      return this.AuthNavi();
    }
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navi);
