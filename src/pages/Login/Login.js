import React, { useState } from 'react';
import styled from 'styled-components';
import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Login = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState([false, false]);
  const policy = checked[0] && checked[1] ? { isValid: true } : {};
  Modal.setAppElement('#root');

  const [emailInput, setEmailInput] = useState();

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  const handleEmailLogin = e => {
    setEmailInput(e.target.value);
  };

  const submit = () => {
    fetch(`http://10.58.1.133:8000/users/email`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.access_token);
        navigate('/');
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    let arr = [false, false];
    setChecked(arr);
  };

  const handleChecked = e => {
    let arr = [...checked];
    arr[e.target.id] = !arr[e.target.id];
    setChecked(arr);
  };

  const goToMain = () => {
    navigate('/');
  };
  return (
    <div>
      <LoginWrapper>
        <Purple>
          <LoginImg src="./images/loginIcon.png" alt="login icon" />
          <Close onClick={goToMain}>x</Close>
        </Purple>
        <LoginMainText>모든 여행 준비를 한번에</LoginMainText>
        <LoginText>
          가격 추이를 살펴보고, 빠르고 간편한 예약으로 여행을 손쉽게 계획하세요.
        </LoginText>
        <ButtonWrapper>
          <LoginButton onClick={openModal}>이메일로 로그인하기</LoginButton>
          <LoginButton onClick={handleKakaoLogin}>
            <LoginLogo src="./images/Kakao_logo.jpeg" alt="kakao icon" />
            Kakao Talk
          </LoginButton>
          <SmallButtonWrapper>
            <SmallLoginButton>
              <LoginLogo src="./images/facebookicon.png" alt="facebook icon" />
              Facebook
            </SmallLoginButton>
            <SmallLoginButton>
              <LoginLogo src="./images/applelogoIcon.png" alt="apple icon" />
              Apple
            </SmallLoginButton>
          </SmallButtonWrapper>
        </ButtonWrapper>
        <LoginFooterWapper>
          계속 진행하시면 위스캐너의 <LoginFooter>서비스 약관</LoginFooter>과
          <LoginFooter>개인정보처리방침</LoginFooter>에 동의하시게 됩니다.
        </LoginFooterWapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <ModalClose onClick={closeModal}>x</ModalClose>
          <ModalTitle>이메일 주소를 알려주세요.</ModalTitle>
          <ModalText>
            <EmailInput
              type="text"
              placeholder="이메일 주소를 입력하세요"
              onChange={handleEmailLogin}
            />
            <span>
              <input id="0" type="checkbox" onClick={handleChecked} />
              <LoginFooter> 개인정보 처리방침 </LoginFooter>에 따라 본인의
              개인정보를 수집 및 이용하는 데 동의합니다.
            </span>
          </ModalText>
          <ModalText>
            <input id="1" type="checkbox" onClick={handleChecked} />
            <span>
              본인은 만 16세 이상이며 <LoginFooter>서비스 약관</LoginFooter>에
              동의합니다.
            </span>
          </ModalText>
          <Agree {...policy} onClick={submit}>
            동의
          </Agree>
        </Modal>
      </LoginWrapper>
    </div>
  );
};

const LoginWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 630px;
  background-color: white;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(62, 62, 62, 0.3);
`;

const Purple = styled.div`
  background-color: #e1deec;
  width: 420px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
`;

const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  border: none;
  background-color: #e1deec;
  font-size: 25px;
  cursor: pointer;
`;

const LoginImg = styled.img`
  width: 200px;
`;

const LoginLogo = styled.img`
  width: 18px;
  margin-right: 10px;
`;
const LoginMainText = styled.p`
  position: absolute;
  top: 280px;
  font-size: 23px;
  font-weight: 700;
`;

const LoginText = styled.p`
  position: absolute;
  top: 320px;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 370px;
  width: 350px;
`;

const LoginButton = styled.button`
  width: 350px;
  height: 45px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallButtonWrapper = styled.div`
  width: 350px;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

const SmallLoginButton = styled.button`
  width: 160px;
  height: 45px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFooterWapper = styled.div`
  position: absolute;
  top: 570px;
  font-size: 14px;
  padding: 10px;
  border-top: 1px solid lightgrey;
`;

const LoginFooter = styled.button`
  background-color: white;
  border: none;
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  cursor: pointer;
  padding: 3px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '370px',
    height: '500px',
  },
};

const ModalClose = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  color: grey;
  display: flex;
  margin-left: auto;
  cursor: pointer;
`;

const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  text-align: center;
`;

const ModalText = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Agree = styled.button`
  width: 270px;
  height: 40px;
  margin-top: 90px;
  margin-left: 30px;
  font-weight: bold;
  font-size: 17px;
  color: ${({ isValid }) => (isValid ? 'white' : 'grey')};
  border-radius: 5px;
  border: none;
  background-color: ${({ isValid }) =>
    isValid ? 'lightskyblue' : 'lightgrey'};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'default')};
`;

const EmailInput = styled.input`
  display: flex;
  width: 300px;
  height: 40px;
  margin: 10px auto;
  margin-bottom: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 10px;
`;
export default Login;
