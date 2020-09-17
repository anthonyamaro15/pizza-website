import React from "react";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import HomeSecondContent from "./HomeSecondContent";
// import HomeThirdContent from
import HomeThirdContent from "./HomeThirdContent";
import HomeFourthContent from "./HomeFourthContent";
import HomeFifthContent from "./HomeFifthContent";
import HomeAboutContent from "./HomeAboutContent";

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomeHeader />
      <HomeContent />
      <HomeSecondContent />
      <HomeThirdContent />
      <HomeFourthContent />
      <HomeFifthContent />
      <HomeAboutContent />
    </div>
  );
};

export default HomePage;
