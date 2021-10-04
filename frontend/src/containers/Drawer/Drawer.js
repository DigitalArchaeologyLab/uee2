import React from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>{props.term}</Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <p>{props.term}</p>
            <p>{"definition"}</p>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
