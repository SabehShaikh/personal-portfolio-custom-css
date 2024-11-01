import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Hi, I am <span>Sabeh</span> Shaikh
          <br /> From Pakistan
        </h1>
        <p className={styles.headerSubtitle}>MERN Stack Developer</p>
      </div>

      <div className={styles.welcome}>
        <h2 className={styles.welcomeTitle}>Welcome to My Portfolio</h2>
        <p className={styles.welcomeText}>
          I specialize in creating responsive and dynamic web applications using
          the MERN stack. Explore my skills and projects below!
        </p>
      </div>

      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>What I Do</h2>
        <ul className={styles.skillsList}>
          <li>MERN Stack Development</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design</li>
          <li>Database Management</li>
        </ul>
      </div>

      <div className={styles.callToAction}>
        <h2 className={styles.ctaTitle}>Let's Work Together!</h2>
        <Link href="/contact" className={styles.ctaLink}>
          Get in touch!
        </Link>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <h2 className={styles.socialTitle}>Connect with Me</h2>
        <p className={styles.socialText}>
          Follow me on:
          <a
            href="https://www.linkedin.com/in/sabeh-shaikh/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            
          >
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/SabehShaikh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
