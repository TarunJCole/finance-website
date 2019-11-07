import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";

import theme from "../styles/theme";

const Landing = () => {
	return (
		<section>
			<h1>Finance</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo non, eaque
				accusantium ipsa odit.
			</p>
			<ScrollLink to="index" smooth="true" offset={-66}>
				<button className="landing-button">
					<FaAngleDown />
				</button>
			</ScrollLink>
			<style jsx>
				{`
					section {
						min-height: 100vh;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						background: linear-gradient(#3337, #3337),
							url("./bank.jpg") no-repeat center center/cover;
						background-attachment: fixed;
						color: ${theme.colors.light};
					}

					h1 {
						font-size: 4rem;
						margin-bottom: 1rem;
					}

					.lead {
						font-size: 1.2rem;
						margin-bottom: 4rem;
					}

					.landing-button {
						display: flex;
						align-items: center;
						font-size: 2rem;
						font-weight: bold;
						padding: 0.75rem;
						background: transparent;
						border: 2px solid ${theme.colors.light};
						color: ${theme.colors.light};
						border-radius: 100%;
						cursor: pointer;
						transition: 0.2s all ease-in-out;
					}

					.landing-button:hover {
						background: ${theme.colors.light};
						color: ${theme.colors.main};
					}
				`}
			</style>
		</section>
	);
};

export default Landing;
