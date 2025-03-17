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
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />

      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Sourav Das showcasing web development skills and projects using React.js, Next.js, and JavaScript." />

       

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
                md={5}
                display="flex"
                justifyContent="center"
                sx={{ position: "relative", width: "100%", height: "auto" }}
              >
                <Box sx={{

                  // backgroundImage: "url('/image/255691291_2b6e5d83-58e5-4d74-99cd-eff31ed9c09b.jpg')",
                  // backgroundSize: 'cover',
                  // backgroundPosition: "center",
                  // width: "330px",
                  // height: "330px",
                  position: "relative",


                }}>
                  {/* Avatar */}
                  <Avatar
                    src="/image/1741623665154.jpg"
                    alt="Sourav"
                    sx={{
                      width: { xs: 200, sm: 230, md: 250, lg: 350, xl: 280 },
                      height: { xs: 200, sm: 230, md: 250, lg: 350, xl: 280 },
                      boxShadow: 3,
                      position: "relative",
                      // ml: 4.5,
                      // mt: 4.5,

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
