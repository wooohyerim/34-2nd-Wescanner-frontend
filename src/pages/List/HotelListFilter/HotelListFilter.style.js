import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
`;

export const Filter = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 15%;
  height: 800px;
  padding-left: 15px;
  background-color: #eee;
  border-right: 1px solid #ddd;
`;

export const FreeBox = styled.div`
  width: 90%;
  margin: 20px 0;
`;

export const FilterText = styled.div`
  margin: 10px;
  color: #333;
  font-weight: bold;
`;

export const FilterBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 2;
`;

export const FilterList = styled.label`
  display: block;
  width: 90%;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    width: 90%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const HideBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const HideButton = styled.button`
  width: 120px;
  height: 50px;
  margin: 0 0 10px 40px;
  color: #0770e3;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;

export const Search = styled.div`
  width: 900px;
  height: 30px;
  margin: 10px 30px;
`;

export const SearchText = styled.div`
  margin-top: 30px;
  color: #444560;
  font-size: 15px;
  font-weight: bold;
`;

export const Ticket = styled.div`
  width: 60%;
  height: auto;
  background-color: #f1f2f8;
  border-right: 1px solid #ddd;
`;

export const TicketBox = styled.div`
  margin: 20px 0;
`;

export const Link = styled.a`
  color: #333;
  text-decoration: none;
`;

export const TicketList = styled.div`
  display: flex;
  width: 850px;
  height: 300px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
`;

export const FirstImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 0 0 10px;
`;

export const SecondImgBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 250px;
  height: 100px;
`;

export const SecondImg = styled.img`
  width: 40%;
  border: 1px solid #ddd;
  overflow: hidden;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

export const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 300px;
  padding: 10px;
  border-right: 1px solid #ddd;
`;

export const FirstInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameText = styled.div`
  width: 300px;
  font-size: 18px;
  font-weight: bold;
`;

export const HotelRating = styled.div`
  margin-right: 10px;
`;

export const FirstConformation = styled.div`
  display: inline-block;
  width: 110px;
  padding: 7px;
  background-color: #f1f2f8;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
`;

export const FirstMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  line-height: 1.5;
`;

export const Local = styled.span`
  margin-left: 10px;
`;

export const FirstAddress = styled.div`
  font-size: 13px;
`;

export const PriceBox = styled.div`
  border-top: 1px solid #ddd;
`;

export const LinkBox = styled.div`
  display: flex;
  align-self: flex-start;
  height: 80px;
  margin-top: 10px;
  padding: 10px 0;
  line-height: 2;
`;

export const PriceInfo = styled.div`
  padding: 0 10px;
  border-right: 1px solid #ddd;
  color: #333;
  font-size: 13px;

  &:hover {
    color: #0770e3;
  }
`;

export const PriceLink = styled.a`
  text-decoration: none;

  &:hover {
    color: #0770e3;
    text-decoration: underline;
  }
`;

export const Bold = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const HotelReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 200px;
  height: 300px;
  border-left: 1px solid #ddd;
  text-align: right;
  cursor: pointer;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 130px;
  height: 130px;
  margin-left: 30px;
`;

export const PriceText = styled.div`
  font-size: 13px;
`;

export const PriceLogoImg = styled.img`
  width: 60px;
  margin-left: 30px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const RowPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const CancelButton = styled.button`
  margin-left: 55px;
  background: none;
  border: 0;
  cursor: pointer;
`;

export const ReviewButton = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 10px;
  color: #fff;
  background-color: #00887c;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005d47;
  }
`;

export const MapBox = styled.div`
  width: 25%;
  height: 1000px;
`;
