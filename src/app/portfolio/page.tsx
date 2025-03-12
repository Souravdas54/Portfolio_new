"use client";

import React from "react";
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Home: React.FC = () => {

  const a = " I'm";

  return (
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
                Hi, <span style={{ color: "red" }}>{a}</span>
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
                {a} a Front-End Developer
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

              {/* Avatar */}
              <Avatar
                src="/image/1741623665154.jpg"
                alt="Sourav"
                sx={{
                  width: { xs: 150, sm: 180, md: 220, lg: 250, xl: 280 },
                  height: { xs: 150, sm: 180, md: 220, lg: 250, xl: 280 },
                  boxShadow: 3,
                  position: "relative",
                  // borderRadius: "50%",

                }}
              />
              {/* </Box> */}
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
  );
};

export default Home;
