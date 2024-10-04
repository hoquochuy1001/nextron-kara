import React from 'react';
import Head from 'next/head';
import MenuBar from '../../../component/menu-bar';
export default function TaiKhoanPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Cập Nhật Tài Khoản</title>
            </Head>
            <MenuBar></MenuBar>
            <h1>Cập nhật tài khoản</h1>
        </React.Fragment>
    );
}