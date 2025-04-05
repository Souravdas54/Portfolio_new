"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Skeleton } from "@mui/material";
import Head from "next/head";

import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";


const jsonLdProjects: WithContext<WebPage> = {
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
  image: string,
}


const Projects: React.FC = () => {
  const [projectname, setProjectname] = useState<AboutDatafild[]>([]);
    // IMAGE AND TEXT SHOW FUNCTION
    useEffect(() => {
      const datafetch = async () => {
        const newdata = await client.fetch(
          `*[_type == "project"]{
        title,description,
        "image":image.asset->_id
        }`
        );
        // console.log('New data ' + newdata);
        setProjectname(newdata);
      }
      datafetch()
    }, []);

    

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setLoading(!navigator.onLine);

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
        id="Projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProjects) }}
      />
      <Head>
        <title>Projects - Sourav Das | Front-End Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Check out Sourav Das' web development projects, including portfolios, e-commerce sites, and adventure platforms." />

      </Head>


      <Box sx={{ py: 6, px: 2, backgroundColor: "rgb(255, 255, 255)", color: "black" }}> {/* Added padding for spacing */}
        {/* Heading */}
        {loading ? (
          <Skeleton variant="rectangular" width="20%" height={50} sx={{margin:"0 auto"}} />
          

        ) : (
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="black" gutterBottom>
            My Projects
          </Typography>
        )}
        {/* Project Grid */}
        <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>

           {projectname.length > 0 && projectname?.map((projectitems:any, index:number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={250} />

              ) : (
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia component="img" height="200" image={projectitems?.image ? urlFor(projectitems?.image).url():''} alt={projectitems.title} />
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
              )}
            </Grid>
          ))}

        </Grid>
      </Box>
    </>
  );
};

export default Projects;

