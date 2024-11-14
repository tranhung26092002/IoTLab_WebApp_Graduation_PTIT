import React, { Fragment, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

type Props = {};

export const Home = (props: Props) => {

  return (
    <Fragment>
      <Header />
      <h2 className="text-center mt-16 text-red-600 text-4xl md:text-5xl">
        THỰC HÀNH CHUYÊN SÂU IoT
      </h2>
      <div className="flex justify-center">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
