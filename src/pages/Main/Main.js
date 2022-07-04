import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HotelSeach from './component/HotelSeach';
import mainImg from '../../assets/background08.jpg';
import Sliders from './component/Sliders';
import CheckDate from './component/CheckDate';
import 'react-datepicker/dist/react-datepicker.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const [city, setCity] = useState([]);
  const [slider, setSlider] = useState([]);

  const [isPlaceModal, setIsPlaceModal] = useState(false);

  const goToListPage = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');
  const [searchId, setSearchId] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  const sendToSearch = () => {
    const hotelId = searchId;
    const queryString = hotelId;

    hotelId === undefined
      ? alert('목적지를 선택 하십시오')
      : goToListPage(`hotels${queryString}`);
  };

  useEffect(() => {
    fetch(`http://3.90.252.248:8000/hotels/search${location.search}`)
      .then(res => res.json())
      .then(data => {
        setCity(data);
      });
  }, [location.search]);

  useEffect(() => {
    fetch('/data/sliderData.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  return (
    <>
      <Container
        onClick={() => {
          setIsPlaceModal(false);
        }}
      >
        <Search>
          <Title>머무를 곳을 찾아보세요</Title>
          <SelctBox>
            <Selcts>
              <HotelSeach
                city={city}
                isPlaceModal={isPlaceModal}
                setIsPlaceModal={setIsPlaceModal}
                search={search}
                setSearch={setSearch}
                onChangeSearch={onChangeSearch}
                searchId={searchId}
                setSearchId={setSearchId}
              />
              <CheckDate
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </Selcts>
            <Filterbutton>
              <FilterBox>
                <StarRating>
                  <RatingCheckBox type="checkbox" />
                  <RatingTitle>5성급</RatingTitle>
                </StarRating>
                <StarRating>
                  <RatingCheckBox type="checkbox" />
                  <RatingTitle>4성급</RatingTitle>
                </StarRating>
                <StarRating>
                  <RatingCheckBox type="checkbox" />
                  <RatingTitle>3성급</RatingTitle>
                </StarRating>
              </FilterBox>
              <HotelButton onClick={sendToSearch}>
                <HotelButtonTitle>호텔 검색</HotelButtonTitle>
                <i class="fa-solid fa-arrow-right" />
              </HotelButton>
            </Filterbutton>
          </SelctBox>
        </Search>
      </Container>
      <MainSection>
        <CarouselBox>
          <Sliders slider={slider} setSlider={setSlider} />
        </CarouselBox>
        <BestHotel>
          <VideoSet src="./images/hotel_01.mp4" autoPlay muted loop />
          <VideoCommerce>
            <VideoTitle>최고의 호텔을 비교하세요</VideoTitle>
            <Commerces>
              <CommerceImage src="./images/agoda_01.png" />
              <CommerceImage src="./images/hotelscom_01.png" />
              <CommerceImage src="./images/tripcom_01.png" />
              <CommerceImage src="./images/bookingcom_01.jpg" />
            </Commerces>
          </VideoCommerce>
        </BestHotel>
      </MainSection>
    </>
  );
};
export default Main;

const Container = styled.div`
  width: 100vw;
  height: 650px;
  padding-top: 200px;
  background-image: url(${mainImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height: 280px;
  margin: 0px auto;
`;

const Title = styled.h4`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
`;

const SelctBox = styled.div`
  width: 1050px;
  height: 200px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #01122c;
`;

const Selcts = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin: 0px auto;
  color: #fff;
`;
const Filterbutton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 10px;
  color: #fff;
`;

const FilterBox = styled.div`
  display: flex;
  gap: 10px;
`;

const StarRating = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingCheckBox = styled.input``;

const RatingTitle = styled.p``;

const HotelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  background-color: #66bfbf;
  color: #ffffff;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: #01887c;
  }
`;

const HotelButtonTitle = styled.span`
  font-size: 20px;
`;

const MainSection = styled.div`
  width: 100vw;
  height: 1200px;
  background-color: #fff;
`;

const CarouselBox = styled.div`
  width: 1000px;
  height: 450px;
  padding-top: 50px;
  margin: 0px auto;
`;

const BestHotel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 500px;
  background-color: #f1f2f8;
`;

const VideoSet = styled.video`
  width: 750px;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
`;

const VideoCommerce = styled.div`
  text-align: center;
`;

const Commerces = styled.div`
  display: flex;
  gap: 10px;
`;

const VideoTitle = styled.h4`
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
`;

const CommerceImage = styled.img`
  width: 130px;
  height: 70px;
  border-radius: 5px;
  box-shadow: 2px 2px 1px gray;
`;
