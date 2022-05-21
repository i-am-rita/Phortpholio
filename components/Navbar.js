import { data } from "../utils/data";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
// import styled from "styled-components";
// import Box from
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    // <div className={styles.navcontain}>
    //   <div className={styles.logo}>
    //     <h1>
    //       <a href="/">R</a>
    //     </h1>
    //     <div className={styles.hamburger} onClick={handleClick}>
    //       {active ? (
    //         <i className="fa-brands fa-2xl fa-twitter"></i>
    //       ) : (
    //         <i className="fa-solid fa-2xl fa-bars"></i>
    //       )}
    //     </div>
    //   </div>
    //   <div className={active ? styles.activeSidenav : styles.sidenav}>
    //     {data?.map((links, index) => {
    //       return (
    //         <ul className={styles.navlink}>
    //           <li key={index}>
    //             <a href={links.path} passHref>
    //               {links.name}
    //             </a>
    //           </li>
    //         </ul>
    //       );
    //     })}
    //   </div>
    // </div>
    // {/* <i className="fa-solid fa-2xl fa-bars"></i> */}

    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <a href="/">R</a>
      </h1>
      <div className={styles.hamburger} onClick={handleClick}>
        {active ? (
          <i className="fa-brands fa-2xl fa-twitter"></i>
        ) : (
          <i className="fa-solid fa-2xl fa-bars"></i>
        )}
      </div>
      <ul className={active ? styles.activeSidenav : styles.sidenav}>
        {data.map((links, index) => {
          return (
            <li key={index}>
              <a className={styles.navLinks} href={links.path} passHref>
                {links.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
