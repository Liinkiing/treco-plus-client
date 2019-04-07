import React, {ButtonHTMLAttributes, FunctionComponent} from 'react'
import styled, {css} from 'styled-components'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "warning" | "danger" | "info",
  size?: "small" | "medium" | "large" | "cta"
}

const ButtonInner = styled.button`
  ${({size}: Props) => {
  switch (size) {
    case "small":
      return css`
        width: 2rem;
        height: 2rem;
`
    case "medium":
      return css`
        width: 4rem;
        height: 3rem;
`
    case "large":
      return css`
        width: 6rem;
        height: 4rem;
`
    case "cta":
      return css`
        width: 8rem;
        height: 6rem;
`
    default:
      return ''
  }
}};
`

const Button: FunctionComponent<Props> = props => {
  const { children } = props
  return (
    <ButtonInner {...props}>
      {children}
    </ButtonInner>
  )
}

Button.defaultProps = {
  variant: "primary",
  size: "medium"
}

export default styled(Button)<Props>``
