// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portf.module.css";
// import { product } from "../..//utils/data";
import "../public/images/e-commas.png";
import Link from "next/link";
// import { Grid, GridItem } from "@chakra-ui/react";

const product = [
  {
    id: 0,
    title: "E-commerce shop",
    description:
      "E-commerce website, built with Reactjs, Redux for state management",
    image: "/images/e-commas.png",
    github: "https://github.com/i-am-rita/e-commas-task",
    source: "https://e-commas-task.netlify.app",
  },
  {
    id: 1,
    title: "Food Cafe",
    description: 'Built with',
     image: "/images/foodcafe.png",
    github: "https://github.com/i-am-rita/foodCafe",
    source: "https://food-cafe-clone.netlify.app/",
  },

  {
    id: 2,
    title: "Api Jokes",
    description:
      "Jokes from calling an API using Javascript.",
    image: "/images/api-jokes.png",
    github: "https://github.com/i-am-rita/Api-jokes",
    source: "https://api-jokees.netlify.app",
  },
  {
    id: 3,
    title: "Shopping site",
    description:
      "lorem is anjvghb mnb vh v ghvgbgbghjgugbhjbbvjhbvjhvb hbvbhbchsbhbchighvcgfvfutghv short description",
    image: "/images/shopping-site.png",
    github: "/",
    source: "https://shopping-syte.netlify.app",
  },
  {
    id: 4,
    title: "Grid layouts",
    description:
      "Play around with grid",
    image: "/images/grid.png",
    github: "https://github.com/i-am-rita/grid_layout",
    source: "https://layoutgrid.netlify.app",
  },
  {
    id: 5,
    title: "Nature website",
    description:
      "",
    image: "/images/nature-site.png",
    github: "/",
    source: "https://nature-reetah.netlify.app",
  },
  {
    id: 6,
    title: "E-commerce shop",
    description:
      "lorem is anjvghb mnb vh v ghvgbgbghjgugbhjbbvjhbvjhvb hbvbhbchsbhbchighvcgfvfutghv short description",
    image: "/images/micro-grid.png",
    github: "/",
    source: "https://microgrid-clone.netlify.app",
  },
  {
    id: 7,
    title: "E-commerce shop",
    description:
      "lorem is anjvghb mnb vh v ghvgbgbghjgugbhjbbvjhbvjhvb hbvbhbchsbhbchighvcgfvfutghv short description",
    image: "/images/netflix.png",
    github: "https://github.com/i-am-rita/netflixx-clone",
    source: "https://netphlixclone.netlify.app/",
  },
];
const portfolio = () => {
  return (
    <>
      {/* <h1>Use glass morphism here for the projects</h1> */}
      <div className={styles.port_container}>
        {/* <Grid templateColumns="repeat(2, 1fr)" gap={50} className={styles.port_grid}> */}
        {product.map((prods, id) => {
          return (
            <div key={id} className={styles.projectcontainer}>
              <div className={styles.prod_image}>
                {/* <Link href={prods.source} passHref> */}
                <Image
                  className={styles.image}
                  src={prods.image}
                  alt="/"
                  width={800}
                  height={500}
                />
                {/* </Link> */}
                <div className={styles.text_onhover}>
                  <Link href={prods.github} passHref>
                    <i className="fa-brands fa-2xl fa-github"></i>
                  </Link>
                  <a href={prods.source} target="_blank" rel="noreferrer">
                    <i className="fa-solid  fa-2xl fa-arrow-up-right-from-square"></i>
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
        {/* </Grid> */}
      </div>
    </>
  );
};

export default portfolio;
