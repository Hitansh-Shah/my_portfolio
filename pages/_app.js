import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import ExpandingNavbar from "../components/expandingNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ExpandingNavbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
