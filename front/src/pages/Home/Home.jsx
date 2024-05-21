import React from "react";
import { Helmet } from "react-helmet";
import Image from "./Image/Image";
import Card from "./Card/Card";
import Crad from "./Crad/Crad";
import Leader from "./Leadership/Leader";

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
    </div>
  );
};

export default Home;
