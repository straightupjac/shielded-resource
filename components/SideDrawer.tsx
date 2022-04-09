import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import styles from '@styles/header.module.css';
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SideDrawerProps = {
  handleSearchSubmit: MouseEventHandler<HTMLFormElement>;
  handleSearchBarChange: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
}

const SideDrawer = ({ handleSearchSubmit, searchQuery, handleSearchBarChange }: SideDrawerProps) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack>
        <Typography
          variant='button'
          sx={{
            ml: 5,
            my: 2,
            textTransform: 'none',
          }}
        >
          <form className={styles.search} onClick={handleSearchSubmit}>
            <input
              className={styles.search_bar}
              value={searchQuery}
              type="text"
              placeholder="Search.."
              name="search"
              onChange={handleSearchBarChange} />
            <button className={styles.search_button} type="submit">
              <Image alt="a looking glass image for search" src="/search.png" width={20} height={20} />
            </button>
          </form>
          <Link passHref href="/contact">
            <span className={styles.link}>Contact</span>
          </Link>
          <Link passHref href="/about">
            <span className={styles.link}>About</span>
          </Link>
          <Link passHref href="/#more">
            <span className={styles.link}>More Recipes</span>
          </Link>
        </Typography>

      </Stack>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `primary.main`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "secondary.main",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
