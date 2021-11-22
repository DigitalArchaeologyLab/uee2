import React from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import "./Drawer.css";

function SwipeableTemporaryDrawer(props) {
  return (
    <aside>
      <React.Fragment key="right">
        <Button onClick={props.toggleDrawer("right", true)}>
          {props.selectedTerm}
        </Button>
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
            <div className="drawer__contents">
              <p>
                <strong>{props.selectedTerm}</strong>
              </p>
              <p>{props.definition}</p>
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </aside>
  );
}

export default SwipeableTemporaryDrawer;
