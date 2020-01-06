import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  span {
    color: #999;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }
  ul li {
    padding: 0 10px;
    color: #003569;
    font-weight: 600;
  }
`;
