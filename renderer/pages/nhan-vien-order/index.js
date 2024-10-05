import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MenuBar from '../../component/menu-bar'


export default function NvOrderScreen() {

  return (
    <React.Fragment>
      <Head>
        <title>Nhân Viên Order</title>
      </Head>
      <MenuBar></MenuBar>
      <h1>Nhân Viên Order</h1>
    </React.Fragment>
  )
}
