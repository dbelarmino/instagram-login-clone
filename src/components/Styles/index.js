import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  padding: 30px 30px;

  .h1-sign {
    color: #262626;
    font-size: 14px;
    text-align: center;
    font-weight: normal;
  }
  .description a {
    text-decoration: none;
    color: #999;
    font-weight: 600;
  }
  a.btn-sign {
    color: #3897f0;
    text-decoration: none;
  }
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > * {
    margin: 4px 0;
  }
`;
