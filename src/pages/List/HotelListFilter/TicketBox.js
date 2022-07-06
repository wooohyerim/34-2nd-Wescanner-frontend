import React, { useState } from 'react';
import * as S from './HotelListFilter.style';

const TicketBox = ({ list, i }) => {
  const {
    hotel_image,
    hotel_name,
    rating,
    hotel_sites,
    city_name,
    address,
    conformation_contents,
  } = list;

  const [isHovering, setIsHovering] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const printRating = count => {
    const stars = [];
    for (i = 0; i < count; i++) {
      stars.push('⭐️');
    }
    return stars;
  };

  hotel_sites?.sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <S.TicketBox>
      <S.TicketList>
        <S.ImgBox
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <S.FirstImg
            src={hotel_image[imageIndex].image_url}
            alt="건물사진"
            key={i}
          />
          {isHovering && (
            <S.SecondImgBox>
              {hotel_image.map((img, index) => {
                return (
                  <S.SecondImg
                    src={img.image_url}
                    alt="img"
                    key={img.id}
                    onClick={() => setImageIndex(index)}
                  />
                );
              })}
            </S.SecondImgBox>
          )}
        </S.ImgBox>
        <S.HotelInfo>
          <S.Link href="https://www.agoda.com/">
            <div>
              <S.FirstInfo>
                <S.NameText>{hotel_name}</S.NameText>
                <S.FirstConformation>
                  {conformation_contents}에 적합
                </S.FirstConformation>
              </S.FirstInfo>
              <S.HotelRating>{printRating(rating)}</S.HotelRating>
              <S.FirstMap>
                <div>
                  <i className="fa-solid fa-map-pin" />
                  <S.Local>{city_name}</S.Local>
                </div>
                <S.FirstAddress>{address}</S.FirstAddress>
              </S.FirstMap>
            </div>
          </S.Link>
          <S.PriceBox>
            <S.LinkBox>
              {hotel_sites.map((arr, idx) => {
                return (
                  <S.PriceLink href={arr.site_url} key={arr.id}>
                    <S.PriceInfo>
                      {arr.site_name}
                      <i className="fa-brands fa-staylinked" />
                      <S.Bold>₩{Number(arr.price).toLocaleString()}</S.Bold>
                    </S.PriceInfo>
                  </S.PriceLink>
                );
              })}
            </S.LinkBox>
          </S.PriceBox>
        </S.HotelInfo>
        <S.HotelReview>
          <S.RowBox>
            <S.PriceText>
              이 호텔의 <S.BoldText>최저 가격</S.BoldText>
            </S.PriceText>
            <div>
              <div>
                <S.PriceLogoImg
                  src={hotel_sites[0]?.site_logo_image_url}
                  alt="logoImg"
                />
                <S.RowPrice>
                  ₩{Number(hotel_sites[0]?.price).toLocaleString()}
                </S.RowPrice>
                <S.CancelButton>
                  {hotel_sites[0]?.is_free_cancel && <div>무료취소</div>}
                </S.CancelButton>
              </div>
            </div>
          </S.RowBox>
          <div>
            <S.ReviewButton>리뷰 남기기</S.ReviewButton>
          </div>
        </S.HotelReview>
      </S.TicketList>
    </S.TicketBox>
  );
};

export default TicketBox;
