import { data } from "../utils/data";
import Link from "next/link";
import styled from "styled-components";
// import Box from
const Navbar = () => {
  return (
    <Navbar.Wrapper>
      <div className="logo">
        <h1>Rita</h1>
        <nav className="navbar">
          {data?.map((links, index) => {
            return (
              <div className="navlink" key={index}>
                <ul>
                  <Link href={links.path} passHref>
                    <li key={index}>{links.name}</li>
                  </Link>
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </Navbar.Wrapper>
  );
};

export default Navbar;

Navbar.Wrapper = styled.div`
  ${'' /* background: red; */}
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar {
      display: flex;
      cursor: pointer;
      .navlink ul {
        list-style-type: none;
        justify-content: space-evenly;
      }
    }
  }
`;
