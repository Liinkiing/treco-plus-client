import {css} from "styled-components";
import {DEFAULT_BORDER_RADIUS, DEFAULT_BOX_SHADOW} from "./variables";
import {black, dark, light} from "./colors";
import {lighten} from "polished";
import {rgba} from "../../utils/colors";

export const NEUTRAL_LINK = css`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

export const BASE_CARD = css`
  transition: all 0.15s ease-in;
  width: 400px;
  height: 130px;
  background: ${light};
  padding: 20px;
  color: ${dark};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  box-shadow: ${DEFAULT_BOX_SHADOW};
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    background: ${lighten(0.1, light)};
    box-shadow: 0 20px 20px ${rgba(black, 0.15)};
  }
`
