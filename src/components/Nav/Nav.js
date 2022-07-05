import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [isLogined, setIsLogined] = useState(false);

  const navigate = useNavigate();
  const goToLogin = () => {
    checkIsLogined();
    navigate('/login');
  };

  const checkIsLogined = () => {
    if (localStorage.getItem('token')) {
      setIsLogined(true);
    }
  };

  return (
    <NavWrapper>
      <LogoWrapper>
        <LogoImg
          src="./images/airplane-icon-free-13.jpeg"
          alt="wescanner logo"
        />
        <Logo>Wescanner</Logo>
      </LogoWrapper>
      {isLogined ? (
        <Profile src="./images/profile.png" />
      ) : (
        <Login onClick={goToLogin}>로그인</Login>
      )}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1048px;
  margin: 20px auto;
`;

const LogoWrapper = styled.button`
  display: flex;
  align-items: center;
  width: 230px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 45px;
`;
const Logo = styled.button`
  border: none;
  font-size: 28px;
  color: ${props => props.theme.mainColor};
  background-color: white;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 45px;
`;

const Login = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid lightgrey;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.mainColor};
  background-color: white;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.mainColor};
  }
`;
export default Nav;
