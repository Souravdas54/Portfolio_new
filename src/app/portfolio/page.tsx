"use client";

import React from "react";
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Head from "next/head";

const Home: React.FC = () => {

 function addSchemadata() {
    return{
      __html:`{ 
     "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sourav Das",
    "jobTitle": "Front-end Developer",
    "image": "https://sdportfolio.com/image/1741623665154.jpg",
    "url": "https://sdportfolio.com",
    "sameAs": [
      "https://www.linkedin.com/in/sourav-das",
      "https://github.com/sourav-das",
      "https://twitter.com/sourav_das"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Webskitters Academy",
      "url": "https://www.webskittersacademy.in/"
    },
    "knowsAbout": ["JavaScript", "React", "Next.js", "TypeScript", "MUI"],
    "description": "I'm a passionate Front-End Developer specializing in building fast, responsive, and engaging web applications using modern technologies like React, Next.js, and TypeScript."
      }`
    }
  }

  
  return (
    <>
      <Head>
        <title>Sourav Das - Front-End Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Sourav Das showcasing web development skills and projects using React.js, Next.js, and JavaScript." />

        {/* Open Graph (OG) - For social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sourav Das - Frontend Developer Portfolio" />
        <meta property="og:description" content="Explore Sourav Das' web development projects, featuring React.js, Next.js, and JavaScript skills" />
        <meta property="og:image" content="https://portfolio-new-five-eosin.vercel.app/image/Annotation 2025-03-16 103836.png" />
        <meta property="og:url" content="https://portfolio-new-five-eosin.vercel.app/" />
        {/* <meta property="og:url" content="https://sdportfolio.com" /> */}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="portfolio-new-five-eosin.vercel.app" />
        <meta property="twitter:url" content="https://portfolio-new-five-eosin.vercel.app/" />
        <meta name="twitter:title" content="Sourav Das - Front-End Developer Portfolio" />
        <meta name="twitter:description" content="Explore Sourav Das' web development projects, featuring React.js, Next.js, and JavaScript skills." />
        <meta name="twitter:image" content="https://portfolio-new-five-eosin.vercel.app/image/1741623665154.jpg" />

        {/* Additional SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sourav Das" />
        <link rel="canonical" href="https://portfolio-new-five-eosin.vercel.app/" />
        
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ addSchemadata()
            // { __html: JSON.stringify() }
          }
        />
         
      </Head>

      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            height: { xs: '80vh', sm: ' 90vh', md: ' 80vh', lg: ' 70vh', xl: ' 100vh' },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: 'white',
            color: "black",
            px: { xs: 2, md: 5 },
            mb: 5,
            mt: { xs: 5, sm: 5, md: 5 }
          }}
        >
          <Container sx={{ mt: { xs: 1, sm: 3, md: 0 } }}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              sx={{
                flexDirection: { xs: "column-reverse", md: "row" },
                textAlign: { xs: "left", md: "left" },
              }}
            >
              {/* Left Side - Text Content */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                  }}
                >
                  Hi, <span style={{ color: "red" }}>I&apos;m</span>
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color="black"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
                  }}
                >
                  Sourav Das
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "black",
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  }}
                >
                  I&apos;m a Front-End Developer
                </Typography>

                {/* View Project Button */}
                <Link href="/portfolio/project">
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 3,
                      color: "rgb(244, 13, 13)",
                      border: "1px solid rgb(244, 13, 13)",
                      fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                      py: { xs: 0.5, sm: 1 },
                      px: { xs: 1.5, sm: 3 },
                    }}
                  >
                    View My Projects
                  </Button>
                </Link>

                {/* Social Media Icons */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <IconButton
                    href="https://in.linkedin.com/"
                    target="_blank"
                    sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
                  >
                    <FaLinkedin color="#0077B5" />
                  </IconButton>
                  <IconButton
                    href="https://github.com/your-username"
                    target="_blank"
                    sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
                  >
                    <FaGithub color="black" />
                  </IconButton>
                  <IconButton
                    href="https://x.com/?lang=en-in"
                    target="_blank"
                    sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
                  >
                    <FaTwitter color="#1DA1F2" />
                  </IconButton>
                </Box>
              </Grid>

              {/* Right Side - Avatar with Background */}
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
                sx={{ position: "relative", width: "100%", height: "auto" }}
              >
                <Box sx={{

                  // backgroundImage: "url('/image/6402688_3274408.jpg')",
                  // backgroundSize:'cover',
                  // backgroundPosition:"center",
                  // width: "450px",
                  // height: "100px",
                  // position: "relative",

                }}>
                  {/* Avatar */}
                  <Avatar
                    src="/image/1741623665154.jpg"
                    alt="Sourav"
                    sx={{
                      width: { xs: 150, sm: 180, md: 220, lg: 350, xl: 280 },
                      height: { xs: 150, sm: 180, md: 220, lg: 350, xl: 280 },
                      boxShadow: 3,
                      position: "relative",
                      // borderRadius: "50%",
                      // ml:15,
                      // mt:15,

                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* About Me Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </Box>
    </>
  );
};

export default Home;
