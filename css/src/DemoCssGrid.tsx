import React from "react";
import Box from "@mui/material/Box";

export default function DemoCssGrid() {
  return (
    <div style={{ padding: 20 }}>
      <h2>CSS Grid Demo</h2>
      
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={i}
            sx={{ bgcolor: "lightblue", p: 2, borderRadius: 2, textAlign: "center" }}
          >
            Item {i + 1}
          </Box>
        ))}
      </Box>
    </div>
  );
}
