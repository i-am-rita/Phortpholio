import React from "react";
import styles from "../styles/Resume.module.css";
// import passport from "../public/images/passport.png";
const Resume = () => {
  return (
    <div>
      <div className={styles.container}>
        {/* <div className={styles.download_resume}>
          <button>
            <a
              href="https://docs.google.com/document/d/12gD0Sn4db6sTYrFDKDm9V08s5VC1_WgHlkdqX0EmzXk/edit?usp=sharing"
              target="_blank"
            >
              Download a copy
            </a>
          </button>
        </div> */}
        <div className={styles.grid}>
          <div
            className="leftgrid"
            // style={{
            //   position: "absolute",
            //   width: "60%",
            //   height: "100vh",
            //   boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            //   marginTop: "1.6em",
            //   marginBottom: "0.9em",
            //   overflow: "hidden",
            //   borderRadius: "8px",
            //   willChange: "transform",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            {/* <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
              }}
              src="https://docs.google.com/document/d/12gD0Sn4db6sTYrFDKDm9V08s5VC1_WgHlkdqX0EmzXk/edit?usp=sharing"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe> */}

            <iframe
              style={{
                // position: "absolute",
                width: "100%",
                height: "100vh",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
              }}
              src="https://docs.google.com/document/d/e/2PACX-1vQFTMqClwZBcMwHxxlgV6mOqoJoJi08cC-3W-gGaPBq-BvO7u6OSsfGTx5JCrqaQPx1uGnbZOmXKngH/pub?embedded=true"
            ></iframe>
          </div>
        </div>
        <div className={styles.download}>
          <iframe
            style={{
              // position: "absolute",
              width: "100vw",
              height: "100vh",
              top: "0",
              left: "0",
              border: "none",
              padding: "0",
              // margin: "50%",
            }}
            src="https://docs.google.com/document/d/e/2PACX-1vQFTMqClwZBcMwHxxlgV6mOqoJoJi08cC-3W-gGaPBq-BvO7u6OSsfGTx5JCrqaQPx1uGnbZOmXKngH/pub?embedded=true"
          ></iframe>
          {/* <a
            href="https://www.canva.com/design/DAFKRLFTnA8/view?embed"
            target="_blank"
          >
            Click to view my resume
          </a> */}
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
