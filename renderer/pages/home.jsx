import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MenuBar from '../component/menu-bar'
import TongQuanPage from '../component/tong-quan'

export default function HomePage() {

  return (
    <React.Fragment>
      <Head>
        <title>Karaoke Nice</title>
      </Head>
      <MenuBar></MenuBar>
      <TongQuanPage></TongQuanPage>
    </React.Fragment>
  )
}
