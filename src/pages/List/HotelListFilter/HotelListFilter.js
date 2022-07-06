import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TicketBox from './TicketBox';
import FilterBox from './FilterBox';
import * as S from './HotelListFilter.style';

const HotelListFilter = () => {
  const [hotelList, setHotelList] = useState([]);
  const location = useLocation();

  const mapRef = useRef(null);

  const initMap = () => {
    const hotelName = { lat: 35.0, lng: 136.0 };
    const map = new window.google.maps.Map(
      mapRef.current,
      {
        center: { lat: 35.0, lng: 136.0 },
        zoom: 8,
      },
      [mapRef]
    );
    const marker = new window.google.maps.Marker({
      position: { lat: 35.0, lng: 136.0 },
      map: map,
    });
  };
  useEffect(() => {
    initMap();
  }, [initMap]);

  // useEffect(() => {
  //   fetch('data/hotelList.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setHotelList(data.message);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.1.133:8000/hotels${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHotelList(data.message);
      });
  }, []);

  return (
    <S.Section>
      <FilterBox setHotelList={setHotelList} />
      <S.Ticket>
        <S.Search>
          <S.SearchText>
            {hotelList[0]?.hotels.country_name} 내 호텔 &nbsp;
            {hotelList.length}곳을 찾았습니다
          </S.SearchText>
        </S.Search>
        {hotelList.map((list, i) => {
          return (
            list.hotels.hotel_sites.length > 0 && (
              <TicketBox key={list.hotels.hotel_id} list={list.hotels} i={i} />
            )
          );
        })}
      </S.Ticket>
      <S.MapBox ref={mapRef} initialCenter={{ lat: 35.0, lng: 136.0 }} />
    </S.Section>
  );
};

export default HotelListFilter;
