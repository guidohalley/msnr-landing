import { FC, ReactNode } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

interface HeroVerticalSliderProps {
  slides: ReactNode[];
}

const HeroVerticalSlider: FC<HeroVerticalSliderProps> = ({ slides }) => {
  return (
    <Splide
      options={{
        direction: 'ttb',
        height: '28rem',
        arrows: false,
        pagination: true,
        type: 'loop',
        autoplay: true,
        interval: 9000, // más lento
        speed: 1200, // transición más suave
        pauseOnHover: true,
        drag: true,
        wheel: true,
        perPage: 1,
      }}
      className="w-full max-w-xl"
      aria-label="Hero vertical slider"
    >
      {slides.map((slide, idx) => (
        <SplideSlide key={idx} className="flex items-center justify-center h-full">
          {slide}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeroVerticalSlider;
