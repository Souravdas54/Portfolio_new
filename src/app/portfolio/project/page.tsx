"use client";

import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import Head from "next/head";



const project = [
  {
    title: "Portfolio",
    description: "A collection of stunning landscape photographs captured across the globe.",
    image: "/ecommerce.jpg",
    link: "https://portfolio-new-five-eosin.vercel.app/",
  },
  {
    title: "Outdoor Avdenture Website",
    description: "Experience the thrill of high-altitude trekking with our guided tours.",
    image: "/image/outdoor.png",
    link: "https://outdoor-adventure-five.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "A collection of stunning landscape photographs captured across the globe.",
    image: "/ecommerce.jpg",
    link: "https://portfolio-new-five-eosin.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "A collection of stunning landscape photographs captured across the globe.",
    image: "/ecommerce.jpg",
    link: "https://portfolio-new-five-eosin.vercel.app/",
  }, {
    title: "Portfolio",
    description: "A collection of stunning landscape photographs captured across the globe.",
    image: "/ecommerce.jpg",
    link: "https://portfolio-new-five-eosin.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "A collection of stunning landscape photographs captured across the globe.",
    image: "/ecommerce.jpg",
    link: "https://portfolio-new-five-eosin.vercel.app/",
  },
];

const Projects: React.FC = () => {

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sourav's Projects",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "Portfolio",
        "description": "A collection of stunning landscape photographs captured across the globe.",
        "url": "https://portfolio-new-five-eosin.vercel.app/"
      },
      {
        "@type": "CreativeWork",
        "name": "Outdoor Adventure Website",
        "description": "Experience the thrill of high-altitude trekking with our guided tours.",
        "url": "https://outdoor-adventure-five.vercel.app/"
      }
    ]
  };
  
  return (
    <>
      <Head>
      <title>Projects - Sourav Das | Front-End Developer</title>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Check out Sourav Das' web development projects, including portfolios, e-commerce sites, and adventure platforms." />

  {/* Open Graph (OG) - For social sharing */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Projects - Sourav Das | Front-End Developer" />
  <meta property="og:description" content="Discover Sourav Das' projects showcasing React.js, Next.js, and web development expertise." />
  <meta property="og:image" content="/image/outdoor.png" />
  <meta property="og:url" content="https://portfolio-new-five-eosin.vercel.app/" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Projects - Sourav Das | Front-End Developer" />
  <meta name="twitter:description" content="Explore projects by Sourav Das featuring React.js, Next.js, and creative web development solutions." />
  <meta name="twitter:image" content="/image/outdoor.png" />

  {/* Additional SEO Improvements */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Sourav Das" />
  <link rel="canonical" href="https://portfolio-new-five-eosin.vercel.app/" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
      </Head>


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
    </>
  );
};

export default Projects;

