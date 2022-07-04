import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Sliders = ({ slider }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <SliderContainer>
      <Title>인기 여행지</Title>
      <Slider {...settings}>
        {slider.result?.map(({ id, name, image_id }) => {
          return (
            <SliderContent key={id}>
              <SliderText>{name}</SliderText>
              <SliderImg src={`./images/slider_0${image_id}.jpg`} />
            </SliderContent>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  .slick-prev:before {
    color: black;
    font-size: 40px;
  }
  .slick-next:before {
    color: black;
    font-size: 40px;
  }
`;

const Title = styled.h4`
  padding-bottom: 30px;
  font-size: 25px;
  font-weight: 700;
  color: #076fe3;
`;

const SliderContent = styled.div`
  position: relative;
  transition: all 0.5s;
  &:hover {
    filter: brightness(30%);
    opacity: 1;
  }
`;

const SliderText = styled.p`
  position: absolute;
  top: 10px;
  left: 50px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;

const SliderImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 0px auto;
  border-radius: 5px;
  box-shadow: 3px 1px 3px gray;
  object-fit: cover;
  cursor: pointer;
`;

export default Sliders;
