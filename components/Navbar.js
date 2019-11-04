import React from "react";

import theme from "../styles/theme";

const Navbar = () => {
	return (
		<div id="navbar">
			<div className="container">
				<h2>Finance</h2>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
			<style jsx>
				{`
					#navbar {
						color: ${theme.colors.dark};
						background: ${theme.colors.light};
						border-bottom: 1px solid lightgrey;
						padding: 1rem 3rem;
						position: sticky;
					}

					#navbar .container {
						display: flex;
						width: 100%;
						max-width: 1000px;
						margin: 0 auto;
					}

					h2 {
						color: ${theme.colors.main};
					}

					ul {
						display: flex;
						list-style: none;
						align-items: center;
						margin-left: auto;
						font-size: 1.1rem;
					}

					li {
						margin: 0 1.5rem;
					}

					a {
						border-bottom: 2px solid transparent;
						transition: 0.1s all ease-in-out;
					}

					a:hover {
						color: ${theme.colors.main};
						border-color: ${theme.colors.main};
					}
				`}
			</style>
		</div>
	);
};

export default Navbar;
