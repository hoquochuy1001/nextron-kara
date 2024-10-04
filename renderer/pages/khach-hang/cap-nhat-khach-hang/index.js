import React from 'react';
import Head from 'next/head';
import MenuBar from '../../../component/menu-bar';
export default function KhachHangPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Cập nhật Khách Hàng</title>
            </Head>
            <MenuBar></MenuBar>
            <h1>Cập nhật khách hàng</h1>
        </React.Fragment>
    );
}