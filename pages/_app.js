import Nav from "../comps/Nav";
import "../styles/globals.css";
import "../styles/syntaxHighlight.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
