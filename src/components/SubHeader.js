import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../src/App.css";

const Subheader = () => {
  return (
    <div>
      <Card  className="subheader">
        <CardContent>
          <Typography variant="h6" style={{fontWeight:"bold", color:"white"}} component="div">
            Big Billion Day
          </Typography>
          <Typography variant="body2" color="white">
            Flash Sale begins in July. Get exciting offers and discounts up to
            80% on all products.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subheader;
