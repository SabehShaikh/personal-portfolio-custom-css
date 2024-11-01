import React from "react";
import {
  FaPaperPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          {/* Left Section */}
          <div className={styles.contactLeft}>
            <h1 className={styles.subTitle}>Contact Me</h1>
            <p className={styles.paragraph}>
              <FaPaperPlane className={styles.icon} />
              sabehshaikh201@gmail.com
            </p>
            <div className={styles.socialIcons}>
              <Link
                href="https://www.facebook.com/Sabeh420/"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className={styles.socialIcon}
                />
              </Link>
              <Link
                href="https://twitter.com/shaikh_sabeh"
                aria-label="Twitter"
              >
                <FaXTwitter
                  className={styles.socialIcon}                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sabeh-shaikh-016623245/"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn
                  className={styles.socialIcon}                />
              </Link>
              <Link href="https://github.com/SabehShaikh" aria-label="GitHub">
                <FaGithub
                  className={styles.socialIcon}                />
              </Link>
            </div>
            <Link
              href="/Images/SabehShaikhUpdatedResume.pdf"
              download
              className={styles.downloadCV}            >
              Download CV
            </Link>
          </div>

          {/* Right Section */}
          <div className={styles.contactRight}>
            <form name="submit-to-google-sheet" className={styles.form}>
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                required
                className={styles.formInput}
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                className={styles.formInput}
              />
              <button
                type="submit"
                className={styles.formButton}
              >
                Submit
              </button>
            </form>
            <span id="msg" className={styles.hidden}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
