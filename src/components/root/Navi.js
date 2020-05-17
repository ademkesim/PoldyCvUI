import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import AdminNavi from "./AdminNavi";
import { connect } from "react-redux";
import UserNavi from "./UserNavi";

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  AuthNavi() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <div>Poldy</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login"><Badge color="info" pill>Giriş Yap</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register"><Badge color="success" pill>Kaydol</Badge></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }

  AdminNavi() {
    const items = [
      {},
      { name: "home", label: "Anasayfa", to: "/" },
      { name: "added-admin", label: "Admin Ekle", to: "/add-admin" },
      { name: "applies", label: "Başvurular", to: "/applies" },
      {
        name: "added-department",
        label: "Departman Ekle",
        to: "/add-department",
      },
      { name: "added-title", label: "Ünvan Ekle", to: "/add-title" },
    ];
    return <AdminNavi items={items} />;
  }

  UserNavi() {
    const items = [
      {},
      { name: "home", label: "Anasayfa", to: "/" },
      { name: "addcv", label: "Cv Ekle", to: "/addcv" },
      { name: "applyidlist", label: "Başvurularım", to: "/applyid" },
      { name: "addapply", label: "Başvuru Oluştur", to: "/add-apply" },
    ];
    return <UserNavi items={items} />;
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
