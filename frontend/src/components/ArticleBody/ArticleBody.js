import React from "react";
import Markdown from "markdown-to-jsx";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function MediaCard() {
  return (
    <Card style={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fzz0026sttw/full/!200,200/0/default.jpg"
          alt="Temple of Amun-Ra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Temple of Amun-Ra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            3D Visualization of Temple of Amun-Ra, Roman Period
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </CardActionArea>
    </Card>
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
