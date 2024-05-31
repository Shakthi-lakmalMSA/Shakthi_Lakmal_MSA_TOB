/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a dynamic student at the University of Peradeniya, I am deeply passionate about the intersection of technology and education. Throughout my academic journey, I have held leadership roles, including serving as an AIESEC Marketing Specialist Business Development Team Leader and as Vice President of External Relations at Prime Minds. In these capacities, I have fostered cross-cultural understanding and contributed to the growth of our community.As a journalist at Pera Beats, I have honed my skills in capturing the essence of university life, sharing stories that resonate with our diverse student body.As a Microsoft Student Ambassador, my mission is to bridge the gap between Microsoft’s cutting-edge technology and the educational landscape at our university. Through workshops, events, and collaboration, I aim to cultivate innovation, empower fellow students, and create meaningful impact.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "AI Engineering",
  "Data Science",
  "Machine Learning",
  "Computer vision",
  "Web app development",
  "Big Data",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Microsoft Learning Student Ambassador, I help students and educators learn about Microsoft technologies and tools, and empower them to use them for their academic and professional development. I also collaborate with other ambassadors and Microsoft mentors to organize events, workshops, and webinars, and share my insights and feedback on Microsoft products and services.In addition, I am the Director and CEO of Yesh Ceylon, a startup that aims to promote Sri Lankan culture and products through online platforms. I am passionate about marketing and innovation, and I use my skills in web design, B2C marketing, and communication to create and manage our website, social media, and online store. I also lead a team of talented and creative individuals who share my vision and values.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
