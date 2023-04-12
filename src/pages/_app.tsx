import "../styles/globals.css"
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../utils/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
