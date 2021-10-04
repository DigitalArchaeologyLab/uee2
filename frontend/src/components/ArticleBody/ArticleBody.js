import React from "react";
import Markdown from "markdown-to-jsx";

import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import ImageModal from "../Image/ImageModal";
import IFrameTest from "../Image/IFrameTest";

import SwipeableTemporaryDrawer from "../../containers/Drawer/Drawer";

function MediaCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SwipeableTemporaryDrawer term={"term"} />
      <Card style={{ maxWidth: 350 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="100%"
            image={process.env.PUBLIC_URL + "/elephantine_example.png"}
            alt="Ram Cemetery at Elephantine"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ram Cemetery at Elephantine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Figure 4. The ram cemetery in the temple ofKhnum at Elephantine
              (view to the North)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <ImageModal
        modalContent={<IFrameTest />}
        handleClose={handleClose}
        modalStatus={open}
      />
    </div>
  );
}

function ArticleBody(props) {
  return (
    <div className="articleBody">
      <Markdown children={props.body} />
      <MediaCard />
    </div>
  );
}

export default ArticleBody;
