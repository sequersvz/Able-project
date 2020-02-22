import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
// import { withStyles } from "@material-ui/core/styles";
import img from "assets/img/kitchens/test-img.jpg"

// const styles = {};

const layoutItemCard = ({ name, tags }) => {
  return (
    <Grid item xs={12} md={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="test img"
            height="140"
            image={img}
            title="test img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {tags.map((e, i) => (
            <Chip
              size="small"
              label={e}
              color="primary"
              variant="outlined"
              key={i}
            />
          ))}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default layoutItemCard
