"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, Grid, Skeleton } from "@mui/material";
import Head from "next/head";
import { LocationOn, Email, Phone } from "@mui/icons-material";

import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";

import { client } from "@/sanity/lib/client";


const jsonLdContact: WithContext<WebPage> = {
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

interface ContactDatafild {
  title: string,
  description: string,
  title_info: string,
  location: string,
  email: string,
  phone: string,

}

const Contact: React.FC = () => {
  const [contactname, setContactname] = useState<ContactDatafild | null>(null);
  // IMAGE AND TEXT SHOW FUNCTION
  useEffect(() => {
    const datafetch = async () => {
      try {
        const newdata = await client.fetch(
          `*[_type == "contact"][0]{
        title,description,title_info,location,email,phone,
        "image":image.asset->_id
        }`
        );
        // console.log('New data ' + newdata);
        setContactname(newdata);
      } catch (error) {
        console.error("Error fetching about page data:", error);
      }
    }
    datafetch()
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Clear errors when typing
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    // Check if there are no errors before proceeding
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Form Data:", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    }
  };

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
        id="Contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <Head>
        <title>Contact - Sourav Das | Front-End Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Get in touch with Sourav Das. Contact for web development projects, collaboration, and queries." />


      </Head>


      <Box sx={{ py: 6, px: 2, display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 800, width: "100%" }}>
          {/* Heading */}
          {/* If No Internet - Show Skeleton */}
          {contactname && loading ? (
            <Skeleton variant="text" width="60%" height={40} sx={{ margin: "0 auto" }} />
          ) : (
            <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
              {contactname?.title}
            </Typography>
          )}
          {contactname && loading ? (
            <Skeleton variant="text" width="80%" height={20} sx={{ margin: "0 auto", mb: 4 }} />
          ) : (
            <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
              {contactname?.description}
            </Typography>
          )}
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              {contactname && loading ? (
                <Skeleton variant="rectangular" width="100%" height={250} />
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                  <TextField label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" fullWidth error={errors.name} helperText={errors.name ? "Name is required" : ""} />
                  <TextField label="Your Email" name="email" value={formData.email} onChange={handleChange} variant="outlined" fullWidth error={errors.email} helperText={errors.email ? "Email is required" : ""} />
                  <TextField label="Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" fullWidth multiline rows={4} error={errors.message} helperText={errors.message ? "Message is required" : ""} />
                  <Button type="submit" variant="contained" color="primary" sx={{ py: { xs: 1, sm: 1.2, md: 1.5 }, px: { xs: 3, sm: 4, md: 5 }, fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" }, width: { xs: "100%", sm: "auto" } }}>
                    Send Message
                  </Button>
                </Box>
              )}
            </Grid>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              {contactname && loading ? (
                <Skeleton variant="rectangular" width="100%" height={150} />
              ) : (
                <Box sx={{ p: 3, bgcolor: "#f5f5f5", borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight="bold"> {contactname?.title_info}</Typography>

                  <Typography variant="body2" sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <LocationOn sx={{ mr: 1 }} /> {contactname?.location}</Typography>

                  <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                    <Email sx={{ mr: 1 }} /> {contactname?.email}</Typography>

                  <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                    <Phone sx={{ mr: 1 }} /> {contactname?.phone}</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
