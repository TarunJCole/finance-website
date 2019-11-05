import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

import theme from "../styles/theme";

const Layout = props => {
	return (
		<>
			<Head>
				<title>{`${props.title} | Finance`}</title>
				<meta name="description" content="Example finance website" />
				<link
					href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Navbar />
			{props.children}
			<Footer />
			{/* Global Styling */}
			<style jsx global>
				{`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						font-family: ${theme.fontFamily};
						line-height: ${theme.lineHeight};
					}

					a {
						color: inherit;
						text-decoration: none;
						cursor: pointer;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
