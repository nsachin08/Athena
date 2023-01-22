import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./App.css";
import Content from "./Content";
import Video from "./Video";
import React from "react";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Box
        sx={{ px: 10, boxShadow: 0 }}
        display="flex"
        flexDirection="column"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ px: 10, width: 1, m: 10 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="Contents"
            sx={{ my: 10 }}
          >
            <Grid item xs={5}>
              <Item sx={{ boxShadow: 0, mt: 20 }}>
                <Content></Content>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ boxShadow: 0 }}>
                <Video></Video>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
