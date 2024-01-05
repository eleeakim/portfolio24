import Head from "next/head";
import React from "react";
import { biodata } from "../basicData";
import Header from "./header";
import Navbar from "./Navbar";

const Layout = ({children}: {children: any}) => {

    return(
        <div className="container">
            <Head>
                <title>Eliakim Nyawinda</title>
                <meta name="title" content="Eliakim Nyawinda" />
                <meta name="description" content={biodata.tagline} />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eliakim.online/" />
                <meta property="og:title" content="Eliakim Nyawinda" />
                <meta property="og:description" content={biodata.tagline} />
                <meta property="og:image" content="/metatag.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.eliakim.online/" />
                <meta property="twitter:title" content="Eliakim Nyawinda" />
                <meta property="twitter:description" content={biodata.tagline} />
                <meta property="twitter:image" content="/metatag.jpg" />
            </Head>
            <Header />
            {children}
            <Navbar />
        </div>
    )
}

export default Layout;