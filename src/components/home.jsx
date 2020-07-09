import React, { useEffect } from 'react'
import styled from 'styled-components'
import bg from '../assets/bg2.jpg'

const Home = () => {
  useEffect(() => {
    const bg = document.querySelector('.background-image')
    const divu = document.querySelector('.mainDiv')

    const windowWidth = window.innerWidth / 5
    const windowHeight = window.innerHeight / 5

    divu.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth
      const mouseY = e.clientY / windowHeight

      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`
    })
  }, [])
  return (
    <MainDiv className="mainDiv">
      <Backgroundu className="background-image" />
      <h1 style={{ color: 'white' }}>HOME</h1>
    </MainDiv>
  )
}

export default Home

const Backgroundu = styled.div`
  width: 110%;
  height: 110%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  background: url(${bg}) no-repeat left center / cover;
  filter: brightness(75%) saturate(140%);
  transition: 0.5s ease-out;
`
const MainDiv = styled.div`
  flex-flow: wrap;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
