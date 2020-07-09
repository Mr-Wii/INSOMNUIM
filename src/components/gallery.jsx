import React from 'react'
import styled from 'styled-components'

const Gallery = () => {
  return (
    <MainDiv>
      <h1 style={{ color: 'white' }}>GALLERY</h1>
    </MainDiv>
  )
}

export default Gallery

const MainDiv = styled.div`
  flex-flow: wrap;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
