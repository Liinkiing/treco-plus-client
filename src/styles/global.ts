import { createGlobalStyle } from "styled-components"
import fonts from "./modules/fonts";
import {darkBlue, darkCyan, light} from "./modules/colors";
import reset from "./modules/reset";
import {MAIN_GRADIENT} from "./modules/variables";

export default createGlobalStyle`
  ${fonts};
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  body {
    overflow: hidden;
    font-family: 'No way', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: ${darkBlue};
    color: ${light}
    background: ${MAIN_GRADIENT};
    background-attachment: fixed;
  }
`
