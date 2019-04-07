import styled from "styled-components";
import {Link, LinkProps} from "@reach/router";
import {NEUTRAL_LINK} from "../styles/modules/components";

const NeutralLink = styled(Link)<LinkProps<{}>>`
  ${NEUTRAL_LINK};
`

export default NeutralLink

