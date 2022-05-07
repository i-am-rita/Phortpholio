import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.aboutcontainer}>
      <h2>About me</h2>
      <div className={styles.container}>
        {/* Use a good font from google font */}
        <h3>
          I&apos;m a frontend developer focused majorly on the frontend side of
          the web, with experience in React, Nextjs and JavaScript. <br />I
          enjoy building accessible User interfaces. When I am not writing codes
          that will display awesome interfaces or codes that will solve
          problems, you&apos;ll find me surfing the internet, reading codes on
          github, playing my violin, swimming and spending time with friends and
          family.
        </h3>
      </div>
    </div>
  );
};

export default about;
