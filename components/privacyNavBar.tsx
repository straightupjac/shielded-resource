import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import styles from '@styles/header.module.css';
import Link from "next/link";
import { Block } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
];

const PrivacyNavBar = () => {
  return (
    <>
      <Toolbar>
        <Stack
          direction={{ sm: "row" }}
          display={{ xs: 'none', sm: 'block' }}
          width='100%'
          spacing={4}
          alignItems="center"
        >
          <Link passHref href="/details">
            <span className={styles.link}>Resources Home</span>
          </Link>
          <Link passHref href="/details/manifesto">
            <span className={styles.link}>Manifesto</span>
          </Link>
          <Link passHref href="/details/privacy">
            <span className={styles.link}>Privacy Resources</span>
          </Link>
          <Link passHref href="/details/action-items">
            <span className={styles.link}>Action Items</span>
          </Link>
          <Link passHref href="/details/ethical-design">
            <span className={styles.link}>Ethical Design Plan</span>
          </Link>
          <Link passHref href="/details/ecosystem">
            <span className={styles.link}>Ecosystem Research</span>
          </Link>
        </Stack>
      </Toolbar>
      <Box>
        <Grid
          display={{ xs: 'grid', sm: 'none' }}
          container
          spacing={2}
          paddingBottom={3}
          rowGap={1}
        >
          <Grid item>
            <Link passHref href="/details">
              <span className={styles.link}>Resources Home</span>
            </Link>
          </Grid>
          <Grid item>
            <Link passHref href="/details/manifesto">
              <span className={styles.link}>Manifesto</span>
            </Link>
          </Grid>
          <Grid item>
            <Link passHref href="/details/privacy">
              <span className={styles.link}>Privacy Resources</span>
            </Link>
          </Grid>
          <Grid item>
            <Link passHref href="/details/ethical-design">
              <span className={styles.link}>Ethical Design Plan</span>
            </Link>
          </Grid>
          <Grid item>
            <Link passHref href="/details/ecosystem">
              <span className={styles.link}>Ecosystem Research</span>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PrivacyNavBar;