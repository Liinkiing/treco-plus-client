import {css} from "styled-components";

export default css`@font-face {
  font-family: 'No way';
  src: url(${require('../../assets/fonts/noway-regular-webfont.eot')});
  src: url(${require('../../assets/fonts/noway-regular-webfont.eot')}?#iefix) format('embedded-opentype'),
    url(${require('../../assets/fonts/noway-regular-webfont.woff2')}) format('woff2'),
    url(${require('../../assets/fonts/noway-regular-webfont.woff')}) format('woff'),
    url(${require('../../assets/fonts/noway-regular-webfont.ttf')}) format('truetype'),
    url(${require('../../assets/fonts/noway-regular-webfont.svg')}#nowayregular) format('svg');
  font-weight: normal;
  font-style: normal;
  }
  `
