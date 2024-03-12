import * as React from "react";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SkillsList from "./SkillsList";
//
export default function MySwipeableDrawer({
  open,
  toggleDrawer,
  baseValues,
  handleStatChange,
}) {
  const anchor = "left";
  const [reset, setReset] = useState(false);

  const handleToggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleDrawer(open);
  };

  const handleDrawerClick = (event) => {
    // Stop event propagation to prevent closing when clicking inside the drawer
    event.stopPropagation();
  };

  const handleReset = () => {
    setReset(!reset);
  };

  const list = (anchor) => (
    <div
      className="abilitiesDiv items-center w-100 flex flex-col bg-[#eadcc0]"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={handleDrawerClick}
      onKeyDown={handleDrawerClick}
    >
      <h1 className="w-full text-2xl font-bold text-center text-[#4e3629]">
        SKILLS
      </h1>

      <div className="abilitiesDiv items-center w-full flex flex-col">
        <SkillsList
          baseValues={baseValues}
          handleStatChange={handleStatChange}
        />
      </div>
    </div>
  );

  const getDrawerWidth = () => {
    // Set different widths based on viewport width
    if (window.innerWidth < 600) {
      return "45vw"; // Set the width for smaller screens
    } else {
      return "18vw"; // Set the width for larger screens
    }
  };

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={handleToggleDrawer(false)}
      onOpen={handleToggleDrawer(true)}
      PaperProps={{
        style: {
          width: getDrawerWidth(),
        },
      }}
    >
      {list(anchor)}
    </SwipeableDrawer>
  );
}
