import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { Imagem, Content, Download } from '~/pages/Register/styles';

import { Container, Card, Container2 } from '~/components/Styles';
import Footer from '~/components/Footer';

import img1 from '~/pages/assets/screenshot1.jpg';
import img2 from '~/pages/assets/screenshot2.jpg';
import img3 from '~/pages/assets/screenshot3.jpg';
import img4 from '~/pages/assets/screenshot4.jpg';
import img5 from '~/pages/assets/screenshot5.jpg';
import imgDownloadIos from '~/pages/assets/download-ios.png';
import imgDownloadAndroid from '~/pages/assets/download-android.png';

export default function Register() {
  const [data, setData] = useState({
    emailOrPhone: '',
    fullName: '',
    username: '',
    password: '',
  });

  var settings = {
    dots: false,
    fade: true,
    pauseOnHover: false,
    accessibility: false,
    arrows: false,
    autoplay: true,
    className: 'slider',
    speed: 5000,
  };

  const handleChange = event => {
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Imagem>
          <Slider {...settings}>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
          </Slider>
        </Imagem>
        <Container2>
          <Card>
            <Content>
              <div className="logo" />
              <h1 className="title">
                Sign up to see photos and videos from your friends.
              </h1>
              <button className="btn-login-facebook">
                <span />
                Log in with Facebook
              </button>
              <div className="lines">
                <div className="line1" />
                <div className="text">OR</div>
                <div className="line2" />
              </div>
              <form action="#" className="form" onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="text"
                  name="emailOrPhone"
                  value={data.emailOrPhone}
                  onChange={handleChange}
                  placeholder="Mobile Number or Email"
                />

                <input
                  className="input"
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />

                <input
                  className="input"
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  placeholder="Username"
                />

                <input
                  className="input"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Password"
                />

                <button type="submit" className="btn-submit">
                  Sign up
                </button>
              </form>
              <h1 className="description">
                By signing up, you agree to our{' '}
                {
                  <Link to="./">
                    <b>Terms,</b>
                  </Link>
                }
                {<Link to="./"> Data Policy </Link>} and
                {<Link to="./"> Cookies Policy.</Link>}
              </h1>
            </Content>
          </Card>
          <Card>
            <h1 className="h1-sign">
              Have an account?{' '}
              {
                <Link className="btn-sign" to="./">
                  {' '}
                  Log in
                </Link>
              }
            </h1>
          </Card>
          <Download>
            <h1>Get the app.</h1>
            <div>
              <Link to="./">
                <img src={imgDownloadIos} alt="Download IOS" />
              </Link>
              <Link to="./">
                <img src={imgDownloadAndroid} alt="Download Android" />
              </Link>
            </div>
          </Download>
        </Container2>
      </Container>
      <Footer />
    </>
  );
}
