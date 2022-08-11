import React from "react";
import "./Home.scss";
import Header from "./pages/Header";
import Main from "./Main";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Home() {
  const slides = [];

  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={`${i}`}>
        <Header />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <header className="header">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      </header>
      <Main />
    </React.Fragment>
  );
}

export default Home;
