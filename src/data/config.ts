const config = {
  title: "I'm Ankit | CSE Undergrad",
  description: {
    long: "Explore the portfolio of Ankit, a CSE undergrad and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ankit, a CSE undergrad creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ankit",
    "portfolio",
    "CSE Undergrad",
    "creative technologist",
    "web development",
    "interactive websites",
    "web design",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ankit",
  email: "ankitpaul9341@gmail.com",
  site: "https://ankitpaul6201.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/ankitpaul6201",
    linkedin: "https://www.linkedin.com/in/ankitpaul007/",
    instagram: "https://www.instagram.com/ankit._.jp/",
    twitter: "",
  },
};
export { config };
