import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import styles from '@styles/header.module.css';
import Link from "next/link";

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
];

const PrivacyNavBar = () => {
  return (
    <>
      <Toolbar
        component="nav"
      >
        <Stack direction="row" spacing={4} alignItems="center">
          <Link passHref href="/details">
            <span className={styles.link}>Resources Home</span>
          </Link>
          <Link passHref href="/details/manifesto">
            <span className={styles.link}>Manifesto</span>
          </Link>
          <Link passHref href="/details/privacy">
            <span className={styles.link}>Privacy Resources</span>
          </Link>
          <Link passHref href="/details/ethical-design">
            <span className={styles.link}>Ethical Design Plan</span>
          </Link>
          <Link passHref href="/details/ecosystem">
            <span className={styles.link}>Ecosystem Research</span>
          </Link>
        </Stack>
      </Toolbar>
    </>
  );
};

export default PrivacyNavBar;