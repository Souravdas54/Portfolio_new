"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, } from "@mui/material";
import Head from "next/head";

import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";


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

const Contact: React.FC = () => {
 
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

  return (
    <>
    <Script
        id="website-schema"
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
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
            Let s work together! Fill out the form below, and I &apos;ll get back to you as soon as possible.
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  error={errors.name}
                  helperText={errors.name ? "Name is required" : ""}
                />

                <TextField
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  error={errors.email}
                  helperText={errors.email ? "Email is required" : ""}
                />

                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={errors.message}
                  helperText={errors.message ? "Message is required" : ""}
                />

                <Button type="submit" variant="contained" color="primary"
                  sx={{
                    py: { xs: 1, sm: 1.2, md: 1.5 }, 
                    px: { xs: 3, sm: 4, md: 5 },     
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" }, 
                    width: { xs: "100%", sm: "auto", } 
                  }}>
                  Send Message
                </Button>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, bgcolor: "#f5f5f5", borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Contact Info
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  📍 Location: Kolkata, India
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  📧 Email: sourav@example.com
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  📞 Phone: +91 12365 47890
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
