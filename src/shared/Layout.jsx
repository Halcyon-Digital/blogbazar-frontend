import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "../sass/Header.scss";

function Layout({ children }) {
  const [visible, setVisible] = useState(true);

  const changeVisibility = () => setVisible(false);
  return (
    <>
      {visible && <Header changeVisibility={changeVisibility} />}
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
