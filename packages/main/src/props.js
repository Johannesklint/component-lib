import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  font-family: 'Cascadia Code', Consolas, 'Courier New', monospace;
`
const Inner = styled.span`
  padding-left: 14px;
`
const Property = styled.span`
  color: blueviolet;
`

function Help({ children, props }) {
  console.log('props', props)
  console.log('children', children)
  return (
    <>
      <hr />
      <Wrapper>
        {children ? children : 'props'}: {'{'} <br />
        {Object.entries(props).map(([key, value]) => (
          <>
            <Inner>
              {key}: <Property>{value}</Property>,
              <br />
            </Inner>
          </>
        ))}
        {'}'}
      </Wrapper>
    </>
  )
}

export default Help
