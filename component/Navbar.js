import { StyledNavbar, StyledContainerWrapperNavbar } from "./style/StyledNavbar";
import Link from "next/link"
//this is component for displaying the navbar and nav links
export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledContainerWrapperNavbar>
        <ul>
          <li>
            <Link href={"/"} activeClassName="active">
                <span className="link-menu">Find Pokemon</span>
            </Link>
          </li>
          <li>
            <Link href={"/myPokemonList"} activeClassName="active">
                <span className="link-menu">My Pokemon List</span>
            </Link>
          </li>
        </ul>
      </StyledContainerWrapperNavbar>
    </StyledNavbar>
  );
}