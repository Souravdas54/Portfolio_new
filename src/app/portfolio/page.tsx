"use client";

import React from "react";
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Head from "next/head";
import Script from "next/script";
import { WebPage, WithContext } from "schema-dts";


const jsonLdHome: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sourav Das Portfolio",
  url: "https://sdportfolio.com",
  description:
    "Explore the portfolio of Sourav Das, a Front-end Developer skilled in React.js, Next.js, and Material UI.",
  publisher: {
    "@type": "Person",
    name: "Sourav Das",
  },
};


const Home: React.FC = () => {



  return (
    <>
      <Script
        id="Home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />

      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Sourav Das showcasing web development skills and projects using React.js, Next.js, and JavaScript." />



      </Head>


      {/* Hero Section */}
      <Box
  sx={{
    height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh', xl: '100vh' },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, md: 5 },
    backgroundImage: "url('/image/1742379226818.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color:'black',
    backgroundAttachment: "fixed", // Parallax effect
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
      zIndex: 1,
    }
  }}
>
  <Grid
    container
    spacing={4}
    alignItems="center"
    justifyContent="center"
    sx={{ position: "relative", zIndex: 2 }}
  >
    {/* Avatar Section (On Top for Small Screens) */}
    <Grid
      item
      xs={12}
      md={5}
      display="flex"
      justifyContent="center"
      order={{ xs: 1, md: 2 }}  // Avatar on top for small screens
    >
      <Avatar
        src="/image/1741623665154.jpg"
        alt="Sourav"
        sx={{
          width: { xs: 180, sm: 220, md: 260, lg: 300, xl: 320 },
          height: { xs: 180, sm: 220, md: 260, lg: 300, xl: 320 },
          border: "8px solid white",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
        }}
      />
    </Grid>

    {/* Left Side - Text Content */}
    <Grid
      item
      xs={12}
      md={6}
      textAlign={{ xs: 'center', md: 'left' }}
      order={{ xs: 2, md: 1 }} // Text below Avatar for small screens
    >
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          color: "black",
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
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "rgb(244, 13, 13)",
            '&:hover': {
              backgroundColor: "rgb(200, 10, 10)"
            },
            color: "white",
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
  </Grid>
</Box>


      <Box>

        {/* About Me Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section  */}
        <Contact />
      </Box>
    </>
  );
};

export default Home;
