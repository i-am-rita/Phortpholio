// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portf.module.css";
// import { product } from "../..//utils/data";
import "../public/images/e-commas.png";
// import Link from "next/link";
// import { Grid, GridItem } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";

const product = [
  {
    id: 0,
    title: "Discover beautiful places",
    // description:
    //   "E-commerce website, built with Reactjs, Redux for state management",
    image: "/images/picnic.png",
    // github: "https://github.com/i-am-rita/e-commas-task",
    source: "https://picnic-webssy.netlify.app/",
  },

  {
    id: 1,
    title: "D*y Jokes",
    // description: "Jokes from calling an API using Javascript.",
    image: "/images/api-jokes.png",
    // github: "https://github.com/i-am-rita/Api-jokes",
    source: "https://api-jokees.netlify.app",
  },
  {
    id: 2,
    title: "Shoe Shopping site",
    // description:
    //   "Beautiful shopping site for Shoes of different types, sizes and colors",
    image: "/images/shopping-site.png",
    github: "/",
    source: "https://shopping-syte.netlify.app",
  },
  {
    id: 3,
    title: "Responsive website",

    image: "/images/micro-grid.png",
    github: "/",
    source: "https://microgrid-clone.netlify.app",
  },

  {
    id: 5,
    title: "Nature website",
    // description: "Built with ",
    image: "/images/nature-site.png",
    github: "/",
    source: "https://nature-reetah.netlify.app",
  },
  {
    id: 4,
    title: "Grid layouts",
    // description: "Play around with grid",
    image: "/images/grid.png",
    github: "https://github.com/i-am-rita/grid_layout",
    source: "https://layoutgrid.netlify.app",
  },
  {
    id: 5,
    title: "Netlify Clone",
    image: "/images/netflix.png",
    github: "https://github.com/i-am-rita/netflixx-clone",
    source: "https://netphlixclone.netlify.app/",
  },
  {
    id: 6,
    title: "Split shopping page",
    image: "/images/splitshop.png",
    github: "https://github.com/i-am-rita/netflixx-clone",
    source: "https://split-landinpage.netlify.app/",
  },
];
const portfolio = () => {
  return (
    <>
      <div className={styles.port_container}>
        <div className={styles.container}>
          {product.map((prods, id) => {
            return (
              <div key={id} className={styles.projectcontainer}>
                <div className={styles.prod_image}>
                  <a href={prods.source} target="_blank" rel="norefferer">
                    <Image
                      className={styles.image}
                      src={prods.image}
                      alt="/"
                      width={800}
                      height={500}
                    />
                  </a>
                  <div className={styles.text_onhover}>
                    <a href={prods.source} target="_blank" rel="noreferrer">
                      <h3>Click me</h3>{" "}
                    </a>
                  </div>
                </div>
                <div className={styles.prodtext}>
                  <h2>{prods.title}</h2>
                  <p>{prods.description}</p>
                </div>
              </div>
            );
          })}
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
    </>
  );
};

export default portfolio;
