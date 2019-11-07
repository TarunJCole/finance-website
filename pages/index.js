import React from "react";
import Layout from "../components/Layout";

import Landing from "../components/Landing";
import theme from "../styles/theme";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<main className="index">
				<div className="grid">
					<div className="grid-item">
						<h2>Title1</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quis
							delectus commodi ipsa nobis corporis ea recusandae esse reprehenderit. Quo qui nisi
							quisquam vel iure.
						</p>
					</div>
					<div className="grid-item">
						<h2>Title2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos alias
							optio quasi voluptatibus culpa facere molestias commodi placeat. Aperiam placeat illo
							impedit! Distinctio, cumque?
						</p>
					</div>
					<div className="grid-item">
						<h2>Title3</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae qui odio
							sint maiores. Deleniti voluptatum hic cumque itaque consectetur ea doloremque totam
							dolore similique.
						</p>
					</div>
				</div>
			</main>
			<style jsx>
				{`
					.grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
					}
				`}
			</style>
		</Layout>
	);
};

export default Index;
