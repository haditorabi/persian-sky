import React from 'react';
import Head from 'next/head';
import { Navbar, Footer } from 'flowbite-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <title>PersianSky</title>
                <meta name="description" content="A Yellow Pages-like application for services." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar>
                <Navbar.Brand href="/">
                    <span className="text-xl font-semibold">PersianSky</span>
                </Navbar.Brand>
                <Navbar.Items>
                    <Navbar.Item href="/">Home</Navbar.Item>
                    <Navbar.Item href="/listings">Listings</Navbar.Item>
                </Navbar.Items>
            </Navbar>
            <main className="container mx-auto p-4">{children}</main>
            <Footer>
                <Footer.Copyright href="#" by="PersianSky" year={2023} />
            </Footer>
        </>
    );
};

export default Layout;