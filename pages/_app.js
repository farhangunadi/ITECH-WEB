import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component className=" bg-secondary" {...pageProps} />
    </>
  );
}

export default MyApp;
