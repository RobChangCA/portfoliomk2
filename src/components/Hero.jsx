import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from "styled-components"

const MEDIA = {
  TABLET: "max-width: 768px",
  MOBILE: "max-width: 414px",
}

const StyledBackground = styled(BackgroundImage)`
  height: 100vh;
`

const StyledShyguise = styled(Img)`
  width: 200px;
  opacity: 0.05;
  position: absolute !important;
  width: 700px;
  left: 30px;
  top: 0;
  @media (${MEDIA.TABLET}) {
    width: 100vw;
    left: 0;
    right: 0;
  }
`

const Shader = styled("div")`
  background: black;
  opacity: 0.4;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const TextBox = styled("div")`
  position: absolute;
  z-index: 2;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  top: 0;
  bottom: 0;
  left: 0;
  right: 10%;
  font-family: "Raleway", sans-serif;
  color: rgba(255, 255, 255, 0.5);
  padding-top: 150px;
  padding-left: 200px;
  h1 {
    font-weight: 900;
    font-weight: 100;
    font-size: 2.5rem;
    margin: 0;

    strong {
      color: rgba(255, 255, 255, 0.6);
      font-size: 3.5rem;
      font-weight: 900;
    }
    @media (${MEDIA.TABLET}) {
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media (${MEDIA.MOBILE}) {
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  h2 {
    font-weight: 100;
    font-size: 1.5rem;
    padding-left: 4rem;
  }
  div {
    @media (${MEDIA.TABLET}) {
      padding-left: 0;
      position: absolute;
      top: 320px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (${MEDIA.TABLET}) {
    padding-top: 50px;
    padding-left: 0;
    right: 0;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "portfolio-splash-compressed.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shyguise: file(relativePath: { eq: "shyguise-white.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledBackground
        Tag="section"
        fluid={data.heroImage.childImageSharp.fluid}
      >
        <Shader />
        <TextBox>
          <h1>
            hey, <br /> it's me <strong>rob chang</strong>
          </h1>
          <div>
            <h2>a toronto based dj turned dev</h2>
            <h2>i code and mix records</h2>
          </div>

          <StyledShyguise fluid={data.shyguise.childImageSharp.fluid} />
        </TextBox>
      </StyledBackground>
    </>
  )
}

export default Hero
