"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./about.module.css"; // Import the CSS module

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.aboutCol1}`}>
        <Image
          src="/images/mypic.jpg"
          alt="My Picture"
          width={345}
          height={345}
          className={`${styles.profileImage}`}
        />
      </div>

      <div className={`${styles.aboutCol2}`}>
        <h1 className={`${styles.title}`}>About Me</h1>
        <p className={`${styles.description}`}>
          I'm a dedicated MERN Stack Developer, driven by the passion to create
          user-centric and visually captivating websites. My core skills include
          HTML, CSS, and JavaScript, with a strong focus on enhancing user
          experiences. Currently, I'm mastering React JS for dynamic and
          interactive interfaces. I'm also actively expanding my expertise in
          full-stack development, exploring Node.js to build efficient web
          applications. In addition to my development pursuits, I'm currently
          delving into Generative AI and TypeScript to broaden my skill set and
          stay ahead in the ever-evolving tech landscape.
        </p>

        <div className={`${styles.tabTitles}`}>
          <p
            className={`${styles.tabLinks} ${activeTab === "skills" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("skills")}
          >
            Skills
          </p>
          <p
            className={`${styles.tabLinks} ${activeTab === "experience" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("experience")}
          >
            Experience
          </p>
          <p
            className={`${styles.tabLinks} ${activeTab === "education" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("education")}
          >
            Education
          </p>
        </div>

        <div className={`${styles.tabContents}`}>
          {activeTab === "skills" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>UI/UX</span>
                  <br /> Designing Web/App interfaces
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Front-End Development</span>
                  <br /> Web/App Development
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Responsive Web Design</span>
                  <br /> Creating mobile-friendly websites
                </li>
              </ul>
            </div>
          )}

          {activeTab === "experience" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Web Developer Intern</span>
                  <br /> Saylani Mass IT Training
                  <span className={styles.date}> (August 2023 - Dec 2023)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Remote Web/App Developer Intern</span>
                  <br /> CodeSoft
                  <span className={styles.date}> (Sept 20 - Oct 20, 2023)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Remote Web Developer Intern</span>
                  <br /> TechnoHacks
                  <span className={styles.date}> (Oct 1 - Oct 30, 2023)</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Federal Urdu University of Arts, Sciences & Technology</span>
                  <br /> Bachelor of Computer Science (BSCS)
                  <span className={styles.date}> (2023 - Present)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Governor Sindh Initiative For AI, WEB 3.0 & Metaverse</span>
                  <br /> Generative AI Engineer
                  <span className={styles.date}> (2024 - Present)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>    Saylani Mass IT Training</span>
                  <br />  MERN Stack Web Development
                  <span className={styles.date}> (Jan 2023 - Dec 2023)</span>
                </li>

                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>     Fazaia Degree College Faisal</span>
                  <br />  Pre-Engineering
                  <span className={styles.date}> (2020 - 2022)</span>
                </li>

              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
