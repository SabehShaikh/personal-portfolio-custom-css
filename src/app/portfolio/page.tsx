"use client";

import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Work</h1>

        <div className={styles.grid}>
          {/* Weather App */}
          <div className={styles.card}>
            <Image
              src="/images/weatherapp (1).jpg"
              alt="Weather App"
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.layer}>
              <h3 className={styles.text}>Weather App</h3>
              <p className={styles.description}>
                Stay updated with the latest weather information, so you can
                plan your day with confidence.
              </p>
              <Link
                href="https://weatherappsabeh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaExternalLinkAlt className={styles.textxl} />
              </Link>
            </div>
          </div>

          {/* Quiz App */}
          <div className={styles.card}>
            <Image
              src="/images/quiz-app.jpeg"
              alt="Quiz App"
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.layer}>
              <h3 className={styles.text}>Quiz App</h3>
              <p className={styles.description}>
                Test your knowledge with fun quizzes and challenges.
              </p>
              <Link
                href="https://quizappsabeh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaExternalLinkAlt className={styles.textxl} />
              </Link>
            </div>
          </div>

          {/* Currency Converter App */}
          <div className={styles.card}>
            <Image
              src="/images/currencyconvo.jpg"
              alt="Currency Converter App"
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.layer}>
              <h3 className={styles.text}>Currency Converter App</h3>
              <p className={styles.description}>
                Easily convert currencies with this user-friendly app.
              </p>
              <Link
                href="https://exchangeratebysabeh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaExternalLinkAlt className={styles.textxl} />
              </Link>
            </div>
          </div>
        </div>

        {/* Show More Section */}
        {showMore && (
          <div className={styles.grid}>
            {/* Text Analysis App */}
            <div className={styles.card}>
              <Image
                src="/images/text-analysis.png"
                alt="Text Analysis App"
                width={500}
                height={300}
                className={styles.image}
              />
              <div className={styles.layer}>
                <h3 className={styles.text}>Text Analysis App</h3>
                <p className={styles.description}>
                  Enter text and see the word and character count.
                </p>
                <Link
                  href="https://text-analysis-sabeh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <FaExternalLinkAlt className={styles.textxl} />
                </Link>
              </div>
            </div>

            {/* Todo List */}
            <div className={styles.card}>
              <Image
                src="/images/todo_list.png"
                alt="Todo List"
                width={500}
                height={300}
                className={styles.image}
              />
              <div className={styles.layer}>
                <h3 className={styles.text}>Todo List</h3>
                <p className={styles.description}>
                  Keep track of your tasks and stay organized.
                </p>
                <Link
                  href="https://todo-list-sabeh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <FaExternalLinkAlt className={styles.textxl} />
                </Link>
              </div>
            </div>

            {/* Movie Search App */}
            <div className={styles.card}>
              <Image
                src="/images/movie_search.PNG"
                alt="Movie Search App"
                width={500}
                height={300}
                className={styles.image}
              />
              <div className={styles.layer}>
                <h3 className={styles.text}>Movie Search App</h3>
                <p className={styles.description}>
                  Search for your favorite movies quickly and easily.
                </p>
                <Link
                  href="https://movie-search-sabeh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <FaExternalLinkAlt className={styles.textxl} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Show More Button */}
        <div className={styles.showMore}>
          <button
            onClick={handleShowMore}
            className={styles.showMoreButton}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
