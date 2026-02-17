import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";
import classes from "./MainHeader.module.css";
function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={LogoImg} alt="logo image" priority />
          NextLevel food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default MainHeader;
