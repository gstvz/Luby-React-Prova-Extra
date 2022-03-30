import * as S from "./styles";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { icon_arrow } from "@assets";
import { useRef } from "react";

type Props = {
  carColors: {
    color: string;
    photo: string;
  }[];
  activeColor: number;
  handleSlide: (index: number) => void;
};

export const CarSlider = ({ carColors, activeColor, handleSlide }: Props) => {
  const btnNext = useRef<HTMLButtonElement>(null);
  const btnPrev = useRef<HTMLButtonElement>(null);

  return (
    <S.Container>
      <S.SlideButton side="left" ref={btnPrev}>
        <S.Arrow src={icon_arrow} />
      </S.SlideButton>
      <S.SlideButton side="right" ref={btnNext}>
        <S.Arrow src={icon_arrow} forward />
      </S.SlideButton>
      <S.Slider
        modules={[Navigation]}
        navigation={{
          prevEl: btnPrev.current,
          nextEl: btnNext.current,
        }}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        slideToClickedSlide
        onTransitionEnd={(swiper) => handleSlide(swiper.realIndex)}
      >
        {carColors.map((color, index) => (
          <SwiperSlide>
            <S.Slide>
              <S.Card isActive={activeColor === index}>
                <S.CarPhoto src={color.photo} />
              </S.Card>
            </S.Slide>
          </SwiperSlide>
        ))}
      </S.Slider>
    </S.Container>
  );
};