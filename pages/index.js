import React from "react";
import Layout from "../components/Layout";

import Landing from "../components/Landing";
import theme from "../styles/theme";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<section className="index"></section>
		</Layout>
	);
};

export default Index;
