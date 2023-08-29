import React from "react";
import Hero from "./hero";
import Header from "../header";
import About from "../about";
import Services from "../services";
import Banner from "../banner";
import Advantages from "../advantages";
import Portfolio from "../portfolio";
import Comments from "../comments";
import Form from "../form";
import Blog from "../blog";
import Footer from "../footer";

const HomeComponent = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <Banner/>
      <Advantages/>
      <Portfolio/>
      <Comments/>
      <Form/>
      <Blog/>
      <Footer/>
    </>
  );
};

export default HomeComponent;
