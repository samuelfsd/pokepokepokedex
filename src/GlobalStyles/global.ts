import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
:root {
  --white:#FFF;
  --black:#212529;
  --blue:#209cee;
  --green: #76c442;
  --yellow: #f2c409;
  --red:#ce372b;

}
@media (max-width:1080px) {
  html{
    font-size:93.17%;
  }
}
@media (max-width:720px) {
  html{
    font-size:87.5%;
  }
}
body,input,select,textarea,button {
  font: 400 1rem 'Press Start 2P';
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}`;
