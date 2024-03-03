import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.youtube.com/@conceptbtw"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.twitch.tv/conceptbytheway"
              target="_blank"
            >
              <i className="fa-brands fa-twitch"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.tiktok.com/@conceptbtw"
              target="_blank"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.facebook.com/conceptbtw"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.instagram.com/conceptbytheway/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.threads.net/@conceptbytheway"
              target="_blank"
            >
              <i className="fa-brands fa-threads"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://twitter.com/conceptbtw"
              target="_blank"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/illiamovchko/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://github.com/conceptbtw"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
