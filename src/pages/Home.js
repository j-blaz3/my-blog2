import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TrendingPosts from "../components/TrendingPosts";
import FreshStories from "../components/FreshStories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
