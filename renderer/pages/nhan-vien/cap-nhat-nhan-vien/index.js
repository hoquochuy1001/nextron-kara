import React from 'react';
import Head from 'next/head';
import MenuBar from '../../../component/menu-bar';
export default function NhanVienPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Cập Nhật Nhân Viên</title>
            </Head>
            <MenuBar></MenuBar>
            <h1>Cập nhật nhân viên</h1>
        </React.Fragment>
    );
}