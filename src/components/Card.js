import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import "./Trip.css";

const Cards = ({ id, name, description, photoLink, packagePrice, removeTour}) => {

  const [readMore, setReadMore] = useState(false);
  let desc = readMore ? description : `${description.substr(0, 110)}.....`;

  const readMoreHandler = ()=> {
    setReadMore(!readMore);
  };

  const removeHandler = ()=> {
    removeTour(id);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ transition: "transform 2s", backgroundColor:'#Fffceb' }}
      className="card-hover"
    >
      <CardMedia sx={{ height: 180 }} image={photoLink} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            borderRadius: "20px",
            backgroundColor: "#f9e9d6",
            color: "#A50037",
            maxWidth: "70px",
          }}
        >
          {packagePrice}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
          <span onClick={readMoreHandler} style={{color : 'blue'}}>
            {readMore ? `show less` : `read more`}
            </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={removeHandler}>
          Not interested
        </Button>
      </CardActions>
    </Card>
    // <Card sx={{ maxWidth: 345 }} style={{transition : 'transform 2s'}} className="card-hover">
    //   <CardMedia sx={{ height: 180 }} image={props.phlink} title={props.title} onClick={()=>console.log(props.phlink)}/>
    //   <CardContent>
    //   <Typography gutterBottom variant="h5" component="div">
    //       {props.price}
    //     </Typography>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {props.description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" variant="contained">
    //     Not interested
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default Cards;
