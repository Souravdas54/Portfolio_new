"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Head from "next/head";
import Script from "next/script";
import { WebPage, WithContext } from "schema-dts";

// IMAGE & TEXT GET //
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


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

interface AboutDatafild {
  title: string,
  description: string,
  name: string,
  image: string,
}


const Home: React.FC = () => {
  const [username, setUsername] = useState<AboutDatafild | null>(null);
  // IMAGE AND TEXT SHOW FUNCTION
  useEffect(() => {
    const datafetch = async () => {
      const newdata = await client.fetch(
        `*[_type == "user"][0]{
      title,description,name,
      "image":image.asset->_id
      }`
      );
      // console.log('New data ' + newdata);
      setUsername(newdata);
    }
    datafetch()
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setLoading(navigator.onLine);

    updateOnlineStatus();

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    }
  }, []);

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
          height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '100vh', xl: '100vh' },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 5 },
          backgroundImage: "url('/image/1742379226818.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: 'black',
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
          sx={{ position: "relative", zIndex: 2, mt: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 }, mb: { xs: 4 } }}
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
            {username && loading ? (<Avatar
              src={username?.image ? urlFor(username.image).url() : ''} // IMAGE SHOW CODE //
              alt="Sourav"
              sx={{
                width: { xs: 180, sm: 220, md: 260, lg: 300, xl: 320 },
                height: { xs: 180, sm: 220, md: 260, lg: 300, xl: 320 },
                border: "8px solid white",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
              }}
            />) : (
              <Skeleton variant="circular" width={260} height={260} />
            )
            }

          </Grid>

          {/* Left Side - Text Content */}

          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: 'center', md: 'left' }}
            order={{ xs: 2, md: 1 }} // Text below Avatar for small screens
          >
            {username && loading ? (<Typography
              variant="h4"
              sx={{
                // display:'flex',
                mt: 2, color: "black", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" ,xl:"4rem"},
              }}>

              {username?.title.slice(0, 3)} <span style={{ color: 'red' }}>{username?.title.slice(4, 7)}</span>
              {/* {username?.title.split(/(I'm)/).map((textsmall, index) =>
                textsmall === "I'm" ? <p key={index} style={{ color: 'red' }}> I&apos;m </p> : textsmall
              )} */}
            </Typography>
            ) : (
              <Skeleton variant="text" width={180} height={70} />
            )
            }

            {username && loading ? (

              <Typography
                variant="h2"
                fontWeight="bold"
                color="black"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem",xl:"5rem" },
                  

                }}>
                {username?.name}
              </Typography>

            ) : (
              <Skeleton variant="text" width={300} height={70} />
            )}

            {username && loading ? (<Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1.1rem",xl:"1.5rem" },
                textAlign: 'justify',
              }}
            >
              {/* {username?.description} */}
              {username?.description.split(/(Front-End Developer)/).map((textpart, index) =>
                textpart === "Front-End Developer" ?
                  <strong key={index}>{textpart}</strong> : textpart

              )}
            </Typography>
            ) : (
              <Skeleton variant="text" width={600} height={150} />
            )
            }

            {/* View Project Button */}
            {username && loading ? (<Link href="/portfolio/project">
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
            </Link>) : (
              <Skeleton variant="text" width={250} height={90} />
            )}

            {/* Social Media Icons */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            > {username && loading ? (
              <IconButton
                href="https://in.linkedin.com/"
                target="_blank"
                sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
              >
                <FaLinkedin color="#0077B5" />
              </IconButton>
            ) : (
              <Skeleton variant="circular" width={50} height={50} />
            )}

              {username && loading ? (
                <IconButton
                  href="https://github.com/dashboard"
                  target="_blank"
                  sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
                >
                  <FaGithub color="black" />
                </IconButton>
              ) : (
                <Skeleton variant="circular" width={50} height={50} />
              )}
              {username && loading ? (
                <IconButton
                  href="https://x.com/?lang=en-in"
                  target="_blank"
                  sx={{ "& svg": { fontSize: { xs: "1.5rem", sm: "2rem" } } }}
                >
                  <FaTwitter color="#1DA1F2" />
                </IconButton>
              ) : (<Skeleton variant="circular" width={50} height={50} />)}
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
