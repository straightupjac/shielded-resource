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
import SideDrawer from "./SideDrawer";

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useRouter();

  function handleSearchBarChange(event: any) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event: any) {
    event.preventDefault();
    if (searchQuery.toLowerCase() === "help") {
      setSearchQuery("")
      localStorage.setItem('auth', 'true');
      history.push("/details");
    }
  }

  const clearAuth = () => {
    localStorage.removeItem('auth');
  }

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between`, alignItems: 'center' }}
            >
              <Link passHref href="/">
                <Button onClick={clearAuth}>
                  <Image alt="fresh meal logo" src="/logo.png" width={190} height={70} />
                </Button>
              </Link>
              {/* for desktop view */}
              <Toolbar
                component="nav"
                sx={{
                  display: { xs: `none`, md: `flex` },
                }}
              >
                <Stack direction="row" spacing={4} alignItems="center">
                  <form className={styles.search} onClick={handleSearchSubmit}>
                    <input className={styles.search_bar} value={searchQuery} type="text" placeholder="Search.." name="search" onChange={handleSearchBarChange} />
                    <button className={styles.search_button} type="submit">
                      <Image alt="a looking glass image for search" src="/search.png" width={20} height={20} />
                    </button>
                  </form>
                  <Link passHref href="/contact">
                    <span className={styles.link} onClick={clearAuth}>
                      Contact
                    </span>
                  </Link>
                  <Link passHref href="/about">
                    <span className={styles.link} onClick={clearAuth}>
                      About
                    </span>
                  </Link>
                  <Link passHref href="/more">
                    <span className={styles.link} onClick={clearAuth}>
                      More Recipes
                    </span>
                  </Link>
                </Stack>
              </Toolbar>
              {/* for mobile view */}
              <SideDrawer
                handleSearchSubmit={handleSearchSubmit}
                handleSearchBarChange={handleSearchBarChange}
                searchQuery={searchQuery}
              />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll >
    </>
  );
};

export default Header;