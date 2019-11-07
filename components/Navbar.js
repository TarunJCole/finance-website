import React from "react";

import theme from "../styles/theme";

const Navbar = () => {
	return (
		<header id="navbar">
			<nav className="container">
				<h2>Finance</h2>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
					#navbar {
						color: ${theme.colors.dark};
						background: ${theme.colors.light};
						border-bottom: 1px solid lightgrey;
						padding: 1rem 3rem;
						position: fixed;
						width: 100%;
						top: 0;
						left: 0;
						box-shadow: 0 0 0.5rem #3338;
					}

					#navbar .container {
						display: flex;
						width: 100%;
						max-width: ${theme.maxWidth};
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

					a:hover,
					a:active {
						color: ${theme.colors.main};
						border-color: ${theme.colors.main};
					}
				`}
			</style>
		</header>
	);
};

export default Navbar;
