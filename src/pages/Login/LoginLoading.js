import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from '../Login/KakaoLoginData';
import qs from 'qs';

const LoginLoading = () => {
  const navigate = useNavigate();
  let params = new URL(document.location).searchParams;
  let code = params.get('code');

  // routes/auth/kakao.js
  const kakao = {
    clientID: REST_API_KEY,
    clientSecret: 'jvVVUsRK0vOE9b9AVAReSGJ46EsdqzYC',
    redirectUrl: REDIRECT_URI,
  };

  const getToken = async () => {
    try {
      await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: qs.stringify({
          grant_type: 'authorization_code',
          client_id: kakao.clientID,
          redirect_uri: kakao.redirectUrl,
          code: code,
          client_secret: kakao.clientSecret,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res)
            fetch(`http://10.58.1.133:8000/users/kakao`, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: res.access_token,
              },
            })
              .then(res => res.json())
              .then(data => {
                localStorage.setItem('token', data.access_token);
                navigate('/');
              });
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>Loading...</div>;
};

export default LoginLoading;
