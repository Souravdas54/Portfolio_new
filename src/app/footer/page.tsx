"use client";

import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

// &apos -> ( ' ) 

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor: "#333", color: "white", py: 5, mt: 0 }}>
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    {/* About Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight="bold">
                            About Me
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            I&apos;m a passionate front-end developer specializing in React, Next.js, and MUI. Building user-friendly web experiences.
                        </Typography>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight="bold">
                            Quick Links
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                        <Link href="/" passHref>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1, color: "rgba(225,225,225,0.8)", "&:hover": { color: "white" } }}>
                Home
            </Typography>
        </Link>
        <Link href="/portfolio/about" passHref>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1, color: "rgba(225,225,225,0.8)", "&:hover": { color: "white" } }}>
                About
            </Typography>
        </Link>
        <Link href="/portfolio/project" passHref>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1, color: "rgba(225,225,225,0.8)", "&:hover": { color: "white" } }}>
                Projects
            </Typography>
        </Link>
        <Link href="/portfolio/contact" passHref>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1, color: "rgba(225,225,225,0.8)", "&:hover": { color: "white" } }}>
                Contact
            </Typography>
        </Link>
                        </Box>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight="bold">
                            Contact
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <Email sx={{ verticalAlign: "middle", mr: 1 }} /> your.email@example.com
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <Phone sx={{ verticalAlign: "middle", mr: 1 }} /> +123 456 7890
                        </Typography>

                        {/* Social Icons */}
                        <Box sx={{ mt: 2 }}>
                            <IconButton href="https://in.linkedin.com/" target="_blank">
                                <FaLinkedin size={30} color="white" />
                            </IconButton>
                            <IconButton href="https://github.com/dashboard" target="_blank">
                                <FaGithub size={30} color="white" />
                            </IconButton>
                            <IconButton href="https://x.com/?lang=en-in" target="_blank">
                                <FaTwitter size={30} color="white" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Typography variant="body2" textAlign="center" sx={{ mt: 4 }}>
                    © {new Date().getFullYear()} Sourav. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
