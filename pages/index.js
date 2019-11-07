import React from "react";
import Layout from "../components/Layout";

import Landing from "../components/Landing";
import theme from "../styles/theme";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<main className="index">
				<div className="grid"></div>
			</main>
			<style jsx>{``}</style>
		</Layout>
	);
};

export default Index;
