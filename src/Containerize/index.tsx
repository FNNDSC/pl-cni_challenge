import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Main from "./Main";

const Containerize: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Containerize;
