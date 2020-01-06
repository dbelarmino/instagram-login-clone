import styled from 'styled-components';
import imagemCelular from '~/pages/assets/imagem-celular.png';
import imagem from '~/pages/assets/imagens.png';

export const Imagem = styled.div`
  width: 50%;
  height: 618px;
  background-image: url(${imagemCelular});
  background-size: 454px 618px;
  background-position: 0 0;
  background-repeat: no-repeat;
  flex-basis: 454px;

  .slider {
    width: 240px;
    top: 100px;
    left: 151px;
  }
`;

export const Content = styled.div`
  .logo {
    background-image: url(${imagem});
    background-repeat: no-repeat;
    background-position: -98px 0;
    height: 51px;
    width: 175px;
    margin: 0 auto;
  }

  .title {
    font-weight: 500;
    line-height: 20px;
    font-size: 17px;
    text-align: center;
  }

  .btn-login-facebook {
    border: 1px solid transparent;
    background-color: #3897f0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 6px 9px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-login-facebook span {
    background-image: url(${imagem});
    background-repeat: no-repeat;
    background-position: -264px -319px;
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }

  .btn-login-facebook:active {
    opacity: 0.7;
  }

  .lines {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lines .line1 {
    background-color: #efefef;
    width: 100%;
    height: 1px;
  }

  .lines .line2 {
    background-color: #efefef;
    width: 100%;
    height: 1px;
  }

  .lines .text {
    padding: 0 20px;
  }

  > * {
    margin: 10px 0;
  }

  .input {
    background-color: #fafafa;
    color: #262626;
    border: 1px solid #efefef;
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 3px;
  }

  .input:focus {
    border: 1px solid #b2b2b2;
  }

  .form > * {
    margin: 4px 0;
  }

  .btn-submit {
    border: 1px solid transparent;
    background-color: #3897f0;
    border-radius: 4px;
    color: #fff;
    width: 100%;
    cursor: pointer;
    display: block;
    font-weight: 600;
    margin-top: 10px;
    padding: 6px 9px;
    text-align: center;
  }

  .btn-submit:active {
    opacity: 0.7;
  }

  .description {
    font-weight: normal;
    line-height: 20px;
    font-size: 17px;
    padding: 0 10px;
    text-align: center;
  }
`;

export const Download = styled.div`
  width: 100%;
  padding: 0 30px;
  h1 {
    color: #262626;
    font-size: 14px;
    text-align: center;
    font-weight: normal;
    margin-top: 15px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  div a img {
    height: 40px;
  }
`;
