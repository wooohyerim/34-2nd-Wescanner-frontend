import React from 'react';
import styled from 'styled-components';

const FooterData = [
  {
    id: 1,
    title: '탐색',
    content: [
      '도시',
      '공항',
      '국가',
      '항공사',
      '항공권',
      '호텔',
      '렌터카',
      '앱',
      '사이트맵',
    ],
  },
  {
    id: 2,
    title: '파트너',
    content: [
      '위캐너와 협력',
      '위스캐너와 광고하기',
      '여행 인사이트',
      '제휴사',
      '여행 API',
    ],
  },
  {
    id: 3,
    title: '회사',
    content: [
      '회사 소개',
      '위스캐너와 함께해야하는 이유',
      '미디어',
      '위스캐너 식구들',
      '접근 가능성',
      '지속 가능한 여행',
      '브랜드 스토리',
      '회사 정보',
      '채용 정보',
      '여행 특징 및 뉴스',
      '쿠키 정책',
      '개인정보처리방침',
      '서비스 약관',
    ],
  },
  {
    id: 4,
    title: '도움말',
    content: ['도움말', '개인정보 설정'],
  },
];
const Footer = () => {
  return (
    <FooterWapper>
      <FooterSubWapper>
        <FooterTitles>{FooterData[0].title}</FooterTitles>
        {FooterData.filter(product => product.id === 1).map((item, index) => (
          <FooterLists key={index}>{item.content.join('\n')}</FooterLists>
        ))}
      </FooterSubWapper>
      <FooterSubWapper>
        <FooterTitles>{FooterData[1].title}</FooterTitles>
        {FooterData.filter(product => product.id === 2).map((item, index) => (
          <FooterLists key={index}>{item.content.join('\n')}</FooterLists>
        ))}
      </FooterSubWapper>
      <FooterSubWapper>
        <FooterTitles>{FooterData[2].title}</FooterTitles>
        {FooterData.filter(product => product.id === 3).map((item, index) => (
          <FooterLists key={index}>{item.content.join('\n')}</FooterLists>
        ))}
      </FooterSubWapper>
      <FooterSubWapper>
        <FooterTitles>{FooterData[3].title}</FooterTitles>
        {FooterData.filter(product => product.id === 4).map((item, index) => (
          <FooterLists key={index}>{item.content.join('\n')}</FooterLists>
        ))}
      </FooterSubWapper>
    </FooterWapper>
  );
};

const FooterWapper = styled.div`
  background-color: #02122c;
  height: 550px;
  padding: 80px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  padding-left: 100px;
`;

const FooterSubWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: flex-start;
`;

const FooterTitles = styled.h4`
  color: #ff7b5a;
  font-size: 24px;
  padding-bottom: 20px;
`;

const FooterLists = styled.button`
  text-align: start;
  color: white;
  font-size: 16px;
  background-color: #02122c;
  border: none;
  white-space: pre-line;
  line-height: 28px;
  cursor: pointer;
`;

export default Footer;
