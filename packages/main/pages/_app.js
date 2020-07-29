import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Aside = styled.aside`
  border: 2px solid bisque;
  flex-basis: 30%;
  width: 25%;
  height: 100vh;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`
const Item = styled.li`
  padding: 4px;
`

const Wrapper = styled.div`
  display: flex;
`

function SideBar() {
  return (
    <Aside>
      <List>
        <Item>
          <Link href="/checkbox">
            <a>Checkbox</a>
          </Link>
        </Item>
        <Item>
          <Link href="/radiogroup">
            <a>Radiogroup</a>
          </Link>
        </Item>
        <Item>
          <Link href="/input">
            <a>Input</a>
          </Link>
        </Item>
      </List>
    </Aside>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <SideBar />
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
