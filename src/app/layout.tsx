import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import { Person, WithContext } from "schema-dts";
import Script from "next/script";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SCHEMA - Website
// const jsonLdWebsite: WithContext<WebSite> = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   name: "Sourav Das Portfolio",
//   url: "https://sdportfolio.com",
//   description:
//     "Explore the portfolio of Sourav Das, a Front-end Developer skilled in React.js, Next.js, and Material UI.",
//   publisher: {
//     "@type": "Person",
//     name: "Sourav Das",
//   },
// };
// SCHEMA - Person
const jsonLdPerson: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sourav Das",
  jobTitle: "Front-end Developer",
  description:
    "Experienced front-end developer specializing in React.js, Next.js, and Material UI. Explore my portfolio for web development projects, skills, and achievements.",
  url: "https://sdportfolio.com",
  image: "/images/profile.jpg",
  sameAs: [
    "https://www.linkedin.com/in/sourav-das",
    "https://github.com/SouravDas",
    "https://twitter.com/SouravDas",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Material UI",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Webskitters Academy",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Portfolio Inquiry",
    email: "contact@sdportfolio.com",
    telephone: "+91 9876543210",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance Web Developer",
  },
};

// SCHEMA - Pages
const jsonLdPages = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Page",
    url: "https://sdportfolio.com",
    description:
      "Welcome to Sourav Das's portfolio home page showcasing skills, experience, and projects.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Page",
    url: "https://sdportfolio.com/about",
    description:
      "Learn more about Sourav Das's skills, educational background, and journey as a front-end developer.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projects Page",
    url: "https://sdportfolio.com/projects",
    description:
      "Explore web development projects by Sourav Das, showcasing creativity and technical skills.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Page",
    url: "https://sdportfolio.com/contact",
    description:
      "Get in touch with Sourav Das for web development inquiries, collaborations, or project discussions.",
  },
];


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Sourav Das' portfolio showcasing web development skills in React.js, Next.js, and JavaScript.",
  applicationName: "Sourav Das Portfolio",
  keywords: ["Sourav Das", "Front-End Developer", "React.js", "Next.js", "JavaScript", "Portfolio",],
  openGraph: {
    title: "Portfolio",
    description: "Explore Sourav Das' portfolio showcasing web development skills in React.js, Next.js, and JavaScript.",
    url: "https://portfolio-new-five-eosin.vercel.app/",
    siteName: "Sourav Das Portfolio",
    images: [
      {
        url: "https://portfolio-new-five-eosin.vercel.app/image/Annotation 2025-03-16 103836.png",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Explore Sourav Das' portfolio showcasing web development skills in React.js, Next.js, and JavaScript.",
    images: ["https://portfolio-new-five-eosin.vercel.app/image/Annotation 2025-03-16 103836.png"],
  },
  metadataBase: new URL("https://portfolio-new-five-eosin.vercel.app"),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Explore Sourav Das' portfolio showcasing web development skills in React.js, Next.js, and JavaScript."
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id="pages-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPages) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
