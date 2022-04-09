import Box from "@mui/material/Box";
import Image from "next/image";
import styles from '@styles/Home.module.css';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" alignItems="center" className={styles.footer} sx={{ py: 5, px: 4 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <Typography >
          © {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>);
};

export default Footer;
