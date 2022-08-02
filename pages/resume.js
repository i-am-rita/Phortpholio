import React from "react";
import styles from "../styles/Resume.module.css";
import passport from "../public/images/passport.png";
const Resume = () => {
  return (
    // <div className='resume'>
    //   <img src='/images/resume.png' alt='resume'/>
    // </div>
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
                // paddingTop: "141.42%",
                // paddingBottom: "40px",
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
                // &#x2F;&#x2F;&#x2F;&#x2F;&#x2F;
                src="https://www.canva.com/design/DAENYXolHXY/view?embed"
                // src='https://www.canva.com/design/DAENYXolHXY/vkN5zt31M0t-Ba8lsR22ew/view?utm_content=DAENYXolHXY&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
{/*             
            <a
            href="https://www.canva.com/design/DAENYXolHXY/view?embed"
              // href="https://www.canva.com/design/DAENYXolHXY/vkN5zt31M0t-Ba8lsR22ew/view?utm_content=DAENYXolHXY&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
              target="_blank"
              rel="noopener"
            >
        
            </a>{" "} */}
           
            {/* <img
              src="https://www.canva.com/design/DAENYXolHXY/view"
              alt="resume show na"
            /> */}
            {/* <img src="https://www.canva.com/design/DAENYXolHXY/vkN5zt31M0t-Ba8lsR22ew/view?utm_content=DAENYXolHXY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" alt="resume"/> */}
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

{
  /* <div>
              {/* <img src={passport} alt="Passport" /> */
}
{
  /* <img
                src="/images/passport.png"
                alt="passport"
                width="100%"
                height="80%"
              />
            </div>
            <div className={styles.contact}>
              <div className={styles.details}>
                <h4>Contact</h4>
                <i className="fa-brands fa-2xl fa-linkedin"></i>
                <a
                  // href='.//'
                  target="_blank"
                  rel="noreferrer"
                >
                  +234 913 5014 404
                </a>

                <a
                  href="https://twitter.com/reetahUzoma"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>

                <a
                  href="https://www.linkedin.com/in/ritauzoma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:ritauzoma07@gmail.com">ritauzoma07@gmail.com</a>
              </div>
              <br />
              <div className={styles.details}>
                <h4>Tools & Languages</h4>
                <div className={styles.skillsgrid1}>
                  <div>
                    <p>Html</p>
                    <p>Reactjs</p>
                    <p>Nextjs</p>
                    <p>Redux</p>
                    <p>Javascript</p>
                    <p>Context API</p>
                  </div>
                  <div>
                    <p>Css</p>
                    <p>SASS</p>
                    <p>Material UI</p>
                    <p>Styled-comp.</p>
                  </div>
                  <div>
                    <p>Github</p>
                    <p>Netlify</p>
                    <p>Visual Studio</p>
                  </div>
                </div>
              </div>

              <br /> */
}

{
  /* <div className={styles.details}>
                <h4>Work ethics</h4>
                <div className={styles.skillsgrid}>
                  <div>
                    {" "}
                    <p>Communication</p>
                    <p>Creative</p>
                    <p>Seeking Clarity</p>
                    <p>Detail Oriented</p>
                    <p>Outspoken</p>
                  </div>
                  <div>
                    {" "}
                    <p>Collaboration</p>
                    <p>Open-minded</p>
                    <p>Open to correction</p>
                    <p>Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightgrid}>
            <div className={styles.name}>
              <h1>
                Rita <br /> Uzoma
              </h1>
              <h5>Frontend Developer</h5>
            </div>
            <div className={styles.nameinfo}>
              <p>
                Rita is an exceptional team player with an analytical approach
                to developing useful solutions, enjoys building eye-catchy
                accessible user interfaces. A software developer focused majorly
                on the frontend side of the web, with experience in React,
                Nextjs and JavaScript. I enjoy building accessible user
                interfaces.
              </p>
            </div>
            <div className={styles.experience}>
              <h3>Work experience</h3>
              <p className={styles.duration}>Jan 2022 - Present</p>
              <p className={styles.role}>
                Torilo Nigeria - Frontend Developer Intern
              </p>
              <p>
                - Collaborated excellently with peers in fast-paced distributed
                team.
              </p>
              <p>
                - Collaborated with designers, product manager on the approach
                of designing accessible UI mockups.
              </p>
              <p>
                - Built websites compatible with different bowseers and screen
                sizes.
              </p>
              <p> */
}
{
  /* - Developed designs to meet specific requirements such as
                quick-loading sites with given layouts.
              </p>
              <p>
                - Consulted with product manager to gather requirements and
                discuss customer choices on given project.
              </p>
              <p>
                - Managed full-cycle development task, handling conception phase
                to completion phase while maintainig guidelines throughout.
              </p>
              <p>
                - Effectively developed and standardized designs according to
                company brand and objectives.
              </p>
              <p>
                - Ready to bring few years of related experience to a growth
                oriented team.
              </p>
            </div>
            <div className={styles.experience}>
              <p className={styles.duration}>2020 - 2021</p>
              <p className={styles.role}>Learning Learning Learning</p>
              <p>Youtube </p>
              <ul>
                <li>
                  <a href="https://www.youtube.com/c/TheNetNinja">
                    {" "}
                    The Net Ninja
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/TraversyMedia"> */
}
{
  /* {" "}
                    Traversy Media
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/Scrimba"> Scrimba</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/WebDevSimplified">
                    {" "}
                    Web Dev Simplified
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/JavaScriptMastery">
                    {" "}
                    JavaScript Mastery
                  </a>
                </li>
              </ul>
              <p>Free courses </p>
              <ul>
                <li>
                  <a href="https://www.freecodecamp.org/">Freecodecamp</a>
                </li>
                <li>
                  <a href="https://www.freecodecamp.org/">Udemy</a>
                </li>
                <li>
                  <a href="https://scrimba.com/">Scrimba</a>
                </li>
                <li>
                  <a href="https://www.freecodecamp.org/">Odin Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */
}





