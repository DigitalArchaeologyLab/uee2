import React from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

function SwipeableTemporaryDrawer(props) {
  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={props.toggleDrawer("right", true)}>{props.term}</Button>
        <SwipeableDrawer
          anchor={"right"}
          open={props.drawerState["right"]}
          onClose={props.toggleDrawer("right", false)}
          onOpen={props.toggleDrawer("right", true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={props.toggleDrawer("right", false)}
            onKeyDown={props.toggleDrawer("right", false)}
          >
            <p>{props.term}</p>
            <p>{props.definition}</p>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
