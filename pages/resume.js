import React from "react";
import styles from "../styles/Resume.module.css";
import passport from "../public/images/passport.png";
const Resume = () => {
  return (
    
    <div>
      <div className={styles.container}>
        <div className={styles.download_resume}>
          <button>
            <a
              href="https://www.canva.com/design/DAENYXolHXY/view"
              target="_blank"
            >
              Download a copy
            </a>
          </button>
        </div>
        <div className={styles.grid}>
          <div className="leftgrid">
            <div
              style={{
                position: "absolute",
                width: "60%",
                height: "100vh",
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                marginTop: "1.6em",
                marginBottom: "0.9em",
                overflow: "hidden",
                borderRadius: "8px",
                willChange: "transform",
                  alignItems: 'center',
                  justifyContent: 'center'

              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                  border: 'none',
                  padding: "0",
                  margin: "0",
                }}
                src="https://www.canva.com/design/DAENYXolHXY/view?embed"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.download}>
          <a
            href="https://drive.google.com/file/d/1b9WtZXpDklfqbOT0oyHaOvRrVvVmm2dU/view"
            target="_blank"
          >
            Click to view my resume
          </a>
        </div>
      </div>
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
  );
};

export default Resume;

