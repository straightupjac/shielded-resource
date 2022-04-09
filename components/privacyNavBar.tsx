import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import HideOnScroll from "@components/hideOnScroll";
import styles from '@styles/header.module.css';
import Image from 'next/image';
import { useState } from 'react'
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from 'next/router'

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
];

const PrivacyNavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useRouter();

  function handleSearchBarChange(event: any) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event: any) {
    event.preventDefault();
    if (searchQuery.toLowerCase() === "help") {
      history.push("/details");
    }
  }

  return (
    <>
      <Toolbar
        component="nav"
        sx={{
          display: { xs: `none`, md: `flex` },
        }}
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