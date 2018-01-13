import * as React from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = (props: Props) => (
  <div>
    <Header/>
    {props.children}
    <Footer/>
  </div>
)

export default Layout
