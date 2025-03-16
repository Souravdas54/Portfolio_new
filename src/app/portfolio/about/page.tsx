"use client";

import React from "react";
import { Box, Typography, Grid, Avatar, Chip, Container } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTypescript, SiMui } from "react-icons/si";
import Head from 'next/head';


const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={24} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={24} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={24} /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" size={24} /> },
  { name: "React-Redux", icon: <SiRedux color="#764ABC" size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs color="white" size={24} /> },
  { name: "Material UI", icon: <SiMui color="#007FFF" size={24} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={24} /> }
];



const About: React.FC = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sourav Das",
    "jobTitle": "Front-End Developer",
    "description": "I'm a passionate Front-End Developer specializing in building interactive and user-friendly web applications.",
    "url": "https://your-portfolio.com/about",
    "image": "/image/1741623665154.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourgithub",
      "https://twitter.com/yourtwitter"
    ]
  };

  return (
    <>
      <Head>
        <title>About - Sourav Das | Front-End Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn more about Sourav Das, a Front-End Developer with expertise in JavaScript, React, and Next.js." />

        {/* Open Graph (OG) - For social sharing */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About - Front-End Developer" />
        <meta property="og:description" content="Explore Sourav Das's journey as a Front-End Developer, specializing in React.js, Next.js, and JavaScript." />
        <meta property="og:image" content="/image/1741623665154.jpg" />
        <meta property="og:url" content="https://portfolio-new-five-eosin.vercel.app/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Front-End Developer" />
        <meta name="twitter:description" content="Discover Sourav Das's skills, experience, and web development journey." />
        <meta name="twitter:image" content="/image/1741623665154.jpg" />

        {/* Additional SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sourav Das" />
        <link rel="canonical" href="https://portfolio-new-five-eosin.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </Head>


      <Box sx={{ backgroundColor: "rgb(255, 255, 255)", color: "black" }}>
        <Container sx={{ py: 7, }}>
          {/* Section Title */}
          <Typography variant="h3" fontWeight="bold" textAlign="center" fontFamily={"sans-serif"} gutterBottom>
            About Me
          </Typography>

          {/* Profile & Introduction */}
          <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
            {/* Left Side: Profile Image */}
            <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="/image/1741623665154.jpg" // Change to your actual image
                alt="Sourav"
                sx={{ width: 200, height: 200, boxShadow: 3 }}
              />
            </Grid>

            {/* Right Side: Introduction */}
            <Grid item xs={12} md={8} >
              <Typography variant="h5" fontWeight="bold">
                Hi,<span style={{ color: "red" }}> I&apos;m </span> Sourav Das
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontFamily: "sans-serif" }}>
                I&apos;m a passionate <strong style={{ color: "red" }}>Front-End Developer</strong> specializing in building
                interactive and user-friendly web applications. With a strong foundation in modern
                web technologies, I love turning ideas into reality with clean and efficient code.
              </Typography>
            </Grid>
          </Grid>

          {/* Skills Section */}
          <Box sx={{ mt: 5, }}>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              Skills & Technologies
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 3, color: 'white' }}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  {/* <Chip label={skill} sx={{ fontSize: "16px", fontWeight: "bold",color:'white' }} /> */}
                  <Chip
                    label={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {skill.icon}
                        {skill.name}
                      </Box>
                    }
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "#333",
                      px: 2,
                      py: 1
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
