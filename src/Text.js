import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Text({ item }) {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 0 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 22.4, textAlign: "left", fontWeight: "600" }}
          color="text.primart"
          gutterBottom
        >
          {item["heading"]}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 48, textAlign: "left", fontWeight: "600" }}
          color="text.primary"
        >
          {item["subHeading"]}
        </Typography>
        <Typography sx={{ fontSize: 18, textAlign: "left" }} variant="body2">
          {item["description"]}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Text;
