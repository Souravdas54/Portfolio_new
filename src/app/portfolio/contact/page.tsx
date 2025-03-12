// "use client";

// import React from "react";
// import { Box, Typography, TextField, Button, Grid } from "@mui/material";

// const Contact: React.FC = () => {
//   return (
//     <Box sx={{ py:6, px: 2, display: "flex", justifyContent: "center" }}>
//       <Box sx={{ maxWidth: 800, width: "100%" }}>
//         {/* Heading */}
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
//           Contact Me
//         </Typography>
//         <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
//           Let's work together! Fill out the form below, and I'll get back to you as soon as possible.
//         </Typography>

//         <Grid container spacing={4}>
//           {/* Contact Form */}
//           <Grid item xs={12} md={6}>
//             <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <TextField label="Your Name" variant="outlined" fullWidth required />
//               <TextField label="Your Email" variant="outlined" fullWidth required />
//               <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required />
//               <Button variant="contained" color="primary" size="large">
//                 Send Message
//               </Button>
//             </Box>
//           </Grid>

//           {/* Contact Info */}
//           <Grid item xs={12} md={6}>
//             <Box sx={{ p: 3, bgcolor: "#f5f5f5", borderRadius: 2 }}>
//               <Typography variant="h6" fontWeight="bold">
//                 Contact Info
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 2 }}>
//                 📍 Location: Kolkata, India
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 📧 Email: sourav@example.com
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 📞 Phone: +91 12365 47890
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid,} from "@mui/material";

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
    <Box sx={{ py: 6, px: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 800, width: "100%" }}>
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Let s work together! Fill out the form below, and I ll get back to you as soon as possible.
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
  );
};

export default Contact;
