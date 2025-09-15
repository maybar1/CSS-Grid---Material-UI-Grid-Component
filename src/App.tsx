import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Material UI Grid Demo</h2>
      
      {/* Grid with 3 responsive cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: 20, textAlign: "center" }}>Card 1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: 20, textAlign: "center" }}>Card 2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: 20, textAlign: "center" }}>Card 3</Paper>
        </Grid>
      </Grid>

      <br />

      {/* Grid with main + sidebar */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper style={{ padding: 20, textAlign: "center" }}>Main Content</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: 20, textAlign: "center" }}>Sidebar</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
