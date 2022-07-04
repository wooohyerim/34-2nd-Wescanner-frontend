import React from 'react';
import styled from 'styled-components';

const HotelSeach = ({
  city,
  isPlaceModal,
  setIsPlaceModal,
  search,
  setSearch,
  onChangeSearch,
  searchId,
  setSearchId,
}) => {
  const onDropdown = e => {
    e.stopPropagation();
    setIsPlaceModal(true);
  };
  return (
    <Place>
      <PlaceTitle>어디에 숙소를 잡고 싶으신가요?</PlaceTitle>
      <PlaceInput
        type="text"
        placeholder="목적지 또는 호텔명을 입력하십시오."
        value={search}
        onClick={onDropdown}
        onChange={onChangeSearch}
      />
      {isPlaceModal && (
        <WhitePlace>
          <Triangle />
          <ModalBox>
            <ModalTitle>
              <PinTitle>
                <i class="fa-solid fa-location-dot" />
                <TitleText>목적지</TitleText>
              </PinTitle>
            </ModalTitle>
            <Destination>
              {city.result
                .filter(hotel => {
                  return search === '' ? null : hotel.name.includes(search);
                })
                .map(({ name, id }) => {
                  return (
                    <DestinationItem
                      key={id}
                      onClick={e => {
                        e.preventDefault();
                        setSearch(name);
                        setSearchId(`?country_id=${id}`);
                      }}
                    >
                      <Item>
                        <ItemCity>
                          <i class="fa-solid fa-earth-americas" />
                          <div>
                            <h4>{name}</h4>
                          </div>
                        </ItemCity>
                        <ItemCityName>나라</ItemCityName>
                      </Item>
                    </DestinationItem>
                  );
                })}

              {city.result.map(location => {
                return location.cities
                  .filter(({ name }) => {
                    return search === '' ? null : name.includes(search);
                  })
                  .map(({ name, town, id }) => {
                    return (
                      <DestinationItem
                        key={id}
                        onClick={e => {
                          e.preventDefault();
                          setSearch(name);
                          setSearchId(`?city_id=${id}`);
                        }}
                      >
                        <Item>
                          <ItemCity>
                            <i class="fa-solid fa-city" />
                            <div>
                              <h4>{name}</h4>
                              <p>{town}</p>
                            </div>
                          </ItemCity>
                          <ItemCityName>도시</ItemCityName>
                        </Item>
                      </DestinationItem>
                    );
                  });
              })}

              {city.result.map(location => {
                return location.cities.map(location => {
                  return location.hotels
                    .filter(({ name }) => {
                      return search === '' ? null : name.includes(search);
                    })
                    .map(({ name, id }) => {
                      return (
                        <DestinationItem
                          key={id}
                          onClick={e => {
                            e.preventDefault();
                            setSearch(name);
                            setSearchId(`?hotel_id=${id}`);
                          }}
                        >
                          <Item>
                            <ItemCity>
                              <i class="fa-solid fa-bed" />
                              <div>
                                <h4>{name}</h4>
                              </div>
                            </ItemCity>
                            <ItemCityName>호텔</ItemCityName>
                          </Item>
                        </DestinationItem>
                      );
                    });
                });
              })}
            </Destination>
          </ModalBox>
        </WhitePlace>
      )}
    </Place>
  );
};

export default HotelSeach;

const Place = styled.label`
  z-index: 10;
`;

const PlaceTitle = styled.p`
  font-size: 13px;
`;

const PlaceInput = styled.input`
  width: 500px;
  height: 45px;
  margin-top: 20px;
  padding-left: 20px;
  border-radius: 5px 0px 0px 5px;
  border: 0px;
  border-right: 1px solid #cfd2cf;
  font-size: 17px;
  &::placeholder {
    font-size: 17px;
    color: #b2b1b9;
  }
`;

const WhitePlace = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  margin-top: 20px;
  padding-top: 20px;
  border-radius: 5px;
  background-color: #fff;
  color: black;
`;

const Triangle = styled.div`
  position: absolute;
  top: -12px;
  left: 230px;
  width: 0px;
  height: 0px;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid #fff;
`;

const ModalBox = styled.div`
  width: 95%;
  height: auto;
  margin: 0px auto;
`;

const ModalTitle = styled.h4`
  padding-bottom: 10px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 700;
  color: gray;
`;

const PinTitle = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
`;

const TitleText = styled.p`
  font-size: 16px;
`;

const Destination = styled.div`
  width: 100%;
  height: auto;
`;

const DestinationItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;

  &:hover {
    background-color: #e1e5ea;
    border-radius: 7px;
    cursor: pointer;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 15px;

  i {
    font-size: 20px;
    color: #595260;
  }
`;

const ItemCity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const ItemCityName = styled.div`
  padding-top: 10px;
  font-size: 11px;
  font-weight: 700;
  color: gray;
`;
