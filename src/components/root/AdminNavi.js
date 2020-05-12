import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";


const AdminNavi = ({
    items
  }) => {
    return (
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="sidebar">
              <List disablePadding dense>
                {items.map(({ label, name,to, items: subItems, ...rest }) => (
                  <React.Fragment key={name}>
                    <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                      <ListItemText><Link to={to} >{label}</Link></ListItemText>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </div>
          </section>
        </aside>
      );
  };
  export default AdminNavi;