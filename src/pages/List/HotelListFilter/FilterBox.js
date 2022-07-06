import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HotelListFilter.style';

const FilterBox = ({ setHotelList }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const [selectedFree, setSelectedFree] = useState(false);
  const [selectedRate, setSelectedRate] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedConformation, setSelectedConformation] = useState([]);
  const navigate = useNavigate();

  const freeQuery = selectedFree ? `is_free_cancel=True` : ``;

  const rateQuery = selectedRate.map(rate => `rating=${rate}`).join('&');

  const priceQuery =
    selectedPrice &&
    (rateQuery ? `price_max=${selectedPrice}` : `price_max=${selectedPrice}`);

  const conformationQuery = selectedConformation
    ? (rateQuery || priceQuery) && selectedConformation
      ? selectedConformation
          ?.map(confor => `conformation_id=${confor}`)
          .join('&')
      : selectedConformation
          ?.map(confor => `conformation_id=${confor}`)
          .join('&')
    : ``;

  const arr = [freeQuery, rateQuery, priceQuery, conformationQuery];

  useEffect(() => {
    fetch(`http://10.58.1.133:8000/hotels?${arr.join('&')}`)
      .then(res => res.json())
      .then(data => setHotelList(data.message));
    if (freeQuery || rateQuery || priceQuery || conformationQuery)
      navigate(`/list?${arr.join('&')}`);
  }, [freeQuery, rateQuery, priceQuery, conformationQuery]);

  const clickedFree = () => {
    setSelectedFree(!selectedFree);
  };

  const saveRate = rate => {
    if (selectedRate.includes(rate)) {
      const selectedIdx = selectedRate.indexOf(rate);
      selectedRate.splice(selectedIdx, 1);
      setSelectedRate([...selectedRate]);
    } else {
      setSelectedRate(selectedRate.concat(rate));
    }
  };

  const savePrice = price => {
    if (selectedPrice === price) {
      setSelectedPrice('');
    } else {
      setSelectedPrice(price);
    }
  };

  const saveConformation = conformation => {
    if (selectedConformation.includes(conformation)) {
      const selectedIndex = selectedConformation.indexOf(conformation);
      selectedConformation.splice(selectedIndex, 1);
      setSelectedConformation([...selectedConformation]);
    } else {
      setSelectedConformation(selectedConformation.concat(conformation));
    }
  };

  const onChange = e => {};

  return (
    <S.Filter>
      <S.HideBox>
        <S.HideButton onClick={() => setToggleButton(!toggleButton)}>
          {toggleButton ? '필터 숨기기' : '필터 보이기'}
        </S.HideButton>
      </S.HideBox>
      {toggleButton && (
        <div>
          <S.FreeBox>
            <S.FilterText>부담 없이 예약하세요</S.FilterText>
            <S.FilterList>
              <input
                type="checkbox"
                checked={selectedFree}
                onChange={onChange}
                onClick={clickedFree}
              />
              무료 취소
            </S.FilterList>
          </S.FreeBox>
          <S.FilterBox>
            <S.FilterText>최대 가격</S.FilterText>

            {PRICE_FILTER.map((el, i) => {
              return (
                <S.FilterList key={i} onChange={() => savePrice(el.price)}>
                  <input
                    type="checkbox"
                    checked={el.price === selectedPrice}
                    onChange={onChange}
                  />
                  ₩{el.price.toLocaleString()}
                </S.FilterList>
              );
            })}
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterText>등급</S.FilterText>
            <ul>
              {RATING_FILTER.map((el, i) => {
                return (
                  <S.FilterList key={i} onChange={() => saveRate(el.id)}>
                    <input
                      type="checkbox"
                      checked={selectedRate.includes(el.id)}
                      onChange={onChange}
                    />
                    {el.rating}
                  </S.FilterList>
                );
              })}
            </ul>
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterText>여행자 유형</S.FilterText>
            <ul>
              {CONFORMATION_FILTER.map((el, i) => {
                return (
                  <S.FilterList
                    key={i}
                    onChange={() => saveConformation(el.id)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedConformation.includes(el.id)}
                      onChange={onChange}
                    />
                    {el.conformation}
                  </S.FilterList>
                );
              })}
            </ul>
          </S.FilterBox>
        </div>
      )}
    </S.Filter>
  );
};

const PRICE_FILTER = [
  { id: 1, price: 100000 },
  { id: 2, price: 200000 },
  { id: 3, price: 400000 },
  { id: 4, price: 600000 },
  { id: 5, price: 1000000 },
];

const RATING_FILTER = [
  { id: 1, rating: '1성급 ' },
  { id: 2, rating: '2성급 ' },
  { id: 3, rating: '3성급 ' },
  { id: 4, rating: '4성급 ' },
  { id: 5, rating: '5성급 ' },
];

const CONFORMATION_FILTER = [
  { id: 1, conformation: '출장여행객' },
  { id: 2, conformation: '가족' },
  { id: 3, conformation: '비즈니스' },
  { id: 4, conformation: '1인 여행객' },
  { id: 5, conformation: '커플' },
];

export default FilterBox;
