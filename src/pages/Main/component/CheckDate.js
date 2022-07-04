import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

const CheckDate = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <label>
        <CheckTitle>체크인</CheckTitle>
        <SDatePickerIn
          locale={ko}
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="체크인 날짜 선택"
          dateFormat="yyyy년 MM월 dd일 eeee"
        />
      </label>
      <label>
        <CheckTitle>체크아웃</CheckTitle>
        <SDatePickerOut
          locale={ko}
          selected={endDate}
          onChange={date => setEndDate(date)}
          placeholderText="체크아웃 날짜 선택"
          dateFormat="yyyy년 MM월 dd일 eeee"
        />
      </label>
    </>
  );
};

const CheckTitle = styled.p`
  font-size: 13px;
`;

const SDatePickerIn = styled(DatePicker)`
  width: 250px;
  height: 45px;
  margin-top: 20px;
  padding-left: 10px;
  border: 0px;
  border-left: 0px;
  border-right: 1px solid #cfd2cf;

  &:hover {
    cursor: pointer;
  }
`;

const SDatePickerOut = styled(DatePicker)`
  width: 250px;
  height: 45px;
  margin-top: 20px;
  padding-left: 10px;
  border-radius: 0px 5px 5px 0px;
  border: 0px;
  border-left: 0px;

  &:hover {
    cursor: pointer;
  }
`;

export default CheckDate;
