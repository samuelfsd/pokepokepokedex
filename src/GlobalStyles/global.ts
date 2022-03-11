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
html{
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),auto;
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
}


`;
