import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
// import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
// import About from "./about";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [openBurger, setOpenBurger] = useState(false);
  const toggleBurger = () => {
    setOpenBurger((prev) => !prev);
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Rita Uzoma</title>
          <meta name="description" content="Portfolio" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>

        <main className={styles.main}>
          <div>
            <h1>
              Rita <br />
              Uzoma{" "}
            </h1>
            <div className={styles.description}>
              <h4>Frontend Developer </h4>
              <p>
                Rita is an exceptional team player with an analytical approach
                to developing useful solutions, enjoys building eye-catchy
                accessible user interfaces. A software developer focused majorly
                on the frontend side of the web, with experience in React,
                Nextjs and JavaScript.
              </p>
              <p>
                When I am not writing codes that will display awesome interfaces
                or codes that will solve problems, you'll find me swimming,
                playing my violin, surfing the internet, writing, building
                simple projects or spending time with family and friends.
                Connect with me on any of these platforms:
              </p>
            </div>

            <div className={styles.socials}>
              <a
                href="https://github.com/i-am-rita"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2xl fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ritauzoma/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2xl fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/reetahUzoma"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2xl fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/ritadeviolinist/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2xl fa-instagram"></i>
              </a>
              <a
                href="mailto:ritauzoma07@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-regular fa-2xl fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className={styles.image_section}>
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#9e3921"
                d="M64.1,-50.8C80.2,-30.9,88.4,-4.4,83.1,19.1C77.9,42.7,59.1,63.2,36.1,74C13,84.8,-14.4,85.7,-36.8,75.3C-59.2,64.9,-76.6,43.2,-81.6,19.2C-86.6,-4.8,-79.2,-31,-63.5,-50.8C-47.9,-70.6,-23.9,-83.9,0,-84C24,-84,48,-70.7,64.1,-50.8Z"
                transform="translate(100 100)"
              /> */}
            <img src="./images/passport.png" alt="Rita" />
            {/* </svg> */}
          </div>
        </main>
        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <span className={styles.logo}>
              <img
                src="/images/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </div>
    </>
  );
}
