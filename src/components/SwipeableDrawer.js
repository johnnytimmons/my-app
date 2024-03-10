import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SkillsList from "./SkillsList";

export default function MySwipeableDrawer({
  open,
  toggleDrawer,
  baseValues,
  handleStatChange,
}) {
  const anchor = "left";

  const handleToggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleDrawer(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={handleToggleDrawer(false)}
      onKeyDown={handleToggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <h1 className="w-full text-2xl font-bold text-center text-[#4e3629] ">
              SKILLS
            </h1>
          </ListItemText>
        </ListItem>
        <SkillsList
          baseValues={baseValues}
          handleStatChange={handleStatChange}
        />
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={handleToggleDrawer(false)}
      onOpen={handleToggleDrawer(true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  );
}
