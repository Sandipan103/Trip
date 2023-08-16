import React, { useState } from "react";
import Card from "./Card";
import "./Trip.css";
import { Grid } from "@mui/material";
import Data from "./Data";

const Trip = (props) => {
  const [tour, setTour] = useState(Data);

  const removeTour = (id)=> {
    const newTour = tour.filter(tour => id !== tour.id);
    setTour(newTour);
  }

  return (
    <div className="trip-style">
      <Grid container spacing={2}>
        {tour.map((t) => {
          return (
            <Grid item xs={11} sm={6} md={4}>
              <Card  {...t} removeTour={removeTour}
                // name={t.name}
                // description={t.description}
                // phlink={t.photoLink}
                // price={t.packagePrice}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Trip;
