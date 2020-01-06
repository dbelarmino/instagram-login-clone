import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

body {
  background-color: rgba(250,250,250);
  color: #999;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}
`;

export default Container;
