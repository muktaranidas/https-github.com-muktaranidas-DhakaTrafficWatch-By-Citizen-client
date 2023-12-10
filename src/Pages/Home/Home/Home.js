import React from "react";
import Banner from "../Banner/Banner";
import Writter from "../Writter/Writter";
import Review from "./Review/Review";
import Complains from "../../complain/Complains";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Writter></Writter>
      <Complains></Complains>
      <Review></Review>
    </>
  );
};

export default Home;
