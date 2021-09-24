import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar></Navbar>

      <div className="container">{children}</div>
      <Footer> </Footer>
    </>
  );
}
