import React from 'react';
import Head from 'next/head';
import MenuBar from '../../../component/menu-bar';
export default function ChucVuPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Cập Nhật Chức Vụ</title>
            </Head>
            <MenuBar></MenuBar>
            <h1>Cập nhật chức vụ</h1>
        </React.Fragment>
    );
}