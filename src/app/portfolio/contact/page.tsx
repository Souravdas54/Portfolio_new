"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, } from "@mui/material";
import Head from "next/head";



const Contact: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+91 12365 47890",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": "English"
  };


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
      <Head>
      <title>Contact - Sourav Das | Front-End Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Get in touch with Sourav Das. Contact for web development projects, collaboration, and queries." />

        {/* Open Graph (OG) - For social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact - Sourav Das | Front-End Developer" />
        <meta property="og:description" content="Contact Sourav Das for web development services, project collaborations, or technical inquiries." />
        <meta property="og:image" content="/image/1741623665154.jpg" />
        <meta property="og:url" content="https://portfolio-new-five-eosin.vercel.app/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Sourav Das | Front-End Developer" />
        <meta name="twitter:description" content="Reach out to Sourav Das for web development services, project collaborations, or technical inquiries." />
        <meta name="twitter:image" content="/image/1741623665154.jpg" />

        {/* Local SEO - For business visibility */}
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata, West Bengal, India" />
        <meta name="geo.position" content="22.5726;88.3639" />
        <meta name="ICBM" content="22.5726, 88.3639" />

        {/* Additional SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sourav Das" />
        <link rel="canonical" href="https://portfolio-new-five-eosin.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
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
                    py: { xs: 1, sm: 1.2, md: 1.5 },  // Padding for height control
                    px: { xs: 3, sm: 4, md: 5 },      // Padding for width control
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" }, // Font size adjustment
                    width: { xs: "100%", sm: "auto", } // Full width on small screens, auto on larger screens
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
