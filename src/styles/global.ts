import { createGlobalStyle } from "styled-components"
import fonts from "./modules/fonts";
import {darkBlue, darkCyan, light} from "./modules/colors";
import reset from "./modules/reset";

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
    font-family: 'No way', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: ${darkBlue};
    color: ${light}
    background: linear-gradient(to bottom, ${darkBlue}, ${darkCyan});
    background-attachment: fixed;
  }
`
