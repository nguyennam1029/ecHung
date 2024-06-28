import React from "react";
import Slider from "../components/Banner/Slider";
import SliderSection from "../components/sliderSection/SliderSection";
import Categories from "../components/Categories/Categories";
import Music from "../components/Music/Music";
import Gallery from "../components/Gallery/Gallery";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <SliderSection label="Today is" heading="Flash Sale" />
      <Categories />
      <SliderSection label="This Month" heading="Best Selling Products" />
      <Music />
      <SliderSection label="Our Products" heading="Explore Our Products" />
      <Gallery />
    </div>
  );
}
