import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextyAnim from 'rc-texty'
import Logo from '../assets/logo.png'
import ImageFadeIn from 'react-image-fade-in'

const Intro = () => {
  const [show, setShow] = useState('I N S O M N I U M')
  const [show1, setShow1] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show)
      setShow1(!show1)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <MainDiv>
      <Texty
        type="alpha"
        duration="3000"
        mode="random"
        onEnd={(type) => {
          console.log(type) // tslint:disable-line
        }}
      >
        {show}
      </Texty>

      <ImgDiv className={show1 ? 'none' : 'fadeout'}>
        <MyImg opacityTransition="20" src={Logo} alt="" />
      </ImgDiv>
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
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 7rem;
  font-family: 'Piedra', cursive;
  cursor: default;
`
