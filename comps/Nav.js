import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>My Next.JS Blog</Link>
      <Link href='/bio'>Bio</Link>
    </nav>
  );
};
export default Nav;
