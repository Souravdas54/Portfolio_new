"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Avatar, Chip, Container } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTypescript, SiMui } from "react-icons/si";
import Head from 'next/head';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Image as SanityImage } from 'sanity';

import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";


const jsonLdAbout: WithContext<WebPage> = {
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

interface AboutDatafild {
  title: string,
  description: string,
  image: SanityImage
}

const About: React.FC = () => {
  const [about, setAbout] = useState<AboutDatafild | null>(null);

  useEffect(() => {
    const datafetch = async () => {
      const newdata = await client.fetch(
        `*[_type == "about"][0]{
      title,description,
      "image":image.asset->_id
      }`
      );
      console.log('New data ' + newdata);
      setAbout(newdata);
    }
    datafetch()
  }, []);
  console.log("snity about" + about);


  return (
    <>

      <Script
        id="About-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <Head>
        <meta
          name="description"
          content="Learn more about Sourav Das, a passionate Front-End Developer skilled in React.js, Next.js, and modern web technologies."
        />


      </Head>


      <Box sx={{
        // backgroundColor: "rgb(238, 15, 15)", 
        color: "black",
        backgroundImage: "url('/image/1742383363444.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
      }}>
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
                {/* Hi,<span style={{ color: "red" }}> I&apos;m </span> Sourav Das */}
                {about?.title}
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
