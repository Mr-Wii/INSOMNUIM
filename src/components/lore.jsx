import React from 'react'
import styled from 'styled-components'

const Lore = () => {
  return (
    <MainDiv>
      <h1 style={{ color: 'white' }}>LORE</h1>
    </MainDiv>
  )
}

export default Lore

const MainDiv = styled.div`
  flex-flow: wrap;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
