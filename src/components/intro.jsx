import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextyAnim from 'rc-texty'

const Intro = () => {
  const [show, setShow] = useState('I N S O M N I U M')
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <MainDiv>
      <Texty
        type="alpha"
        duration="2000"
        mode="random"
        onEnd={(type) => {
          console.log(type) // tslint:disable-line
        }}
      >
        {show}
      </Texty>
    </MainDiv>
  )
}

export default Intro

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Texty = styled(TextyAnim)`
  color: white;
  font-size: 7rem;
  font-family: 'Piedra', cursive;
  cursor: pointer;
`
