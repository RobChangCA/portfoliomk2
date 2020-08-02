import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Normalize } from "styled-normalize"

const StyledLayout = styled("div")`
  background: black;
  max-width: 1680px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  ${Normalize}
  body{
    background: black;
  }
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');
`
const Layout = ({ children }) => (
  <StyledLayout>
    <GlobalStyle />
    {children}
  </StyledLayout>
)

export default Layout
