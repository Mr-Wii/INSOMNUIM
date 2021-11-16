import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextyAnim from 'rc-texty'
import Logo from '../assets/logo.png'
import ImageFadeIn from 'react-image-fade-in'
import { Redirect } from 'react-router-dom'

const Intro = () => {
  const [show, setShow] = useState('I N S O M N I U M')
  const [logoS, setLogoS] = useState(true)
  const [Section1, setSection1] = useState(true)
  const [text1, settext1] = useState('Presented by')
  const [text2, settext2] = useState('Wael')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show)
      setLogoS(!logoS)
    }, 7000)
    const interval1 = setInterval(() => {
      setSection1(!Section1)
    }, 12500)
    const interval2 = setInterval(() => {
      settext1(!text1)
      settext2(!text2)
    }, 18000)
    const redirectMe = setTimeout(() => {
      setRedirect(!redirect)
    }, 23000)
    return () => {
      clearInterval(interval)
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(redirectMe)
    }
  }, [])
  return redirect ? (
    <Redirect to="/home" />
  ) : Section1 ? (
    <MainDiv>
      <Texty
        type="alpha"
        duration="5000"
        mode="random"
        onEnd={(type) => {
          console.log(type)
        }}
      >
        {show}
      </Texty>
      <ImgDiv className={logoS ? 'none' : 'fadeout'}>
        <MyImg opacityTransition="20" src={Logo} alt="" />
      </ImgDiv>
    </MainDiv>
  ) : (
    <MainDiv>
      <CreditGame
        type="alpha"
        duration="4000"
        mode="smooth"
        onEnd={(type) => {
          console.log(type)
        }}
      >
        {text1}
      </CreditGame>
      <CreditGame
        type="alpha"
        duration="4000"
        mode="smooth"
        onEnd={(type) => {
          console.log(type)
        }}
      >
        {text2}
      </CreditGame>
    </MainDiv>
  )
}

export default Intro

const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MyImg = styled(ImageFadeIn)`
  width: 10%;
  margin-top: -15rem;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
`

const MainDiv = styled.div`
  flex-flow: wrap;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
const Texty = styled(TextyAnim)`
  color: white;
  font-size: 7rem;
  font-family: 'Piedra', cursive;
  cursor: default;
  z-index: 1;
`
const CreditGame = styled(Texty)`
  width: 100%;
  letter-spacing: 8px;
  text-align: center;
  font-size: 4rem;
`
