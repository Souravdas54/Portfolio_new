"use client";

import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const project = [
  // {
  //   title: "Photography Website",
  //   description: "A collection of stunning landscape photographs captured across the globe.",
  //   image: "/ecommerce.jpg",
  //   link: "#",
  // },
  {
    title: "Outdoor Avdenture Website",
    description: "Experience the thrill of high-altitude trekking with our guided tours.",
    image: "/image/outdoor.png",
    link: "https://outdoor-adventure-five.vercel.app/",
  },

];

const Projects: React.FC = () => {
  
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "rgb(255, 255, 255)", color: "black" }}> {/* Added padding for spacing */}
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="black" gutterBottom>
        My Projects
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
        {project.map((projectitems, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="200" image={projectitems.image} alt={projectitems.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {projectitems.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {projectitems.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} href={projectitems.link} target="_blank">
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

