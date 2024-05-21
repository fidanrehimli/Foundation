import React from "react";
import { Helmet } from "react-helmet";
import Image from "./Image/Image";
import Card from "./Card/Card";
import Crad from "./Crad/Crad";
import Leader from "./Leadership/Leader";
import Secondsection from "./Second/Secondsection";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Image />
      <Card />
      <Crad />
      <Leader />
      <Secondsection/>
      <Footer/>
    </div>
  );
};

export default Home;
