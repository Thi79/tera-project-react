import { Drawer, List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to="/users/1/post">Criar Post 1</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
