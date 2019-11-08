import React from "react";
import Layout from "../components/Layout";
import { FaHandsHelping, FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa";

import Landing from "../components/Landing";
import theme from "../styles/theme";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<main className="index">
				<section className="grid">
					<div className="grid-item">
						<div>
							<FaExchangeAlt />
						</div>
						<h2>Fast, Reliable Exchange</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quis
							delectus commodi ipsa nobis corporis ea recusandae esse reprehenderit. Quo qui nisi
							quisquam vel iure.
						</p>
					</div>
					<div className="grid-item">
						<div>
							<FaMoneyBillWave />
						</div>
						<h2>Minimal Fees</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos alias
							optio quasi voluptatibus culpa facere molestias commodi placeat. Aperiam placeat illo
							impedit! Distinctio, cumque?
						</p>
					</div>
					<div className="grid-item">
						<div>
							<FaHandsHelping />
						</div>
						<h2>24/7 Support</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae qui odio
							sint maiores. Deleniti voluptatum hic cumque itaque consectetur ea doloremque totam
							dolore similique.
						</p>
					</div>
				</section>
				<section className="slogan">
					<h2>
						Finance <span className="main-color">Slogan</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel repudiandae alias
						harum temporibus maxime!
					</p>
				</section>
				<section className="team">
					<h2>
						Our <span className="main-color">Team</span>
					</h2>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, officia.</p>
					<div className="team-grid">
						<div className="team-card">
							<img className="team-card-img" src="./person1.jpg" alt="Man in suit" />
							<div className="team-card-text">
								<ul>
									<li>
										<h4>Name</h4>
										&emsp;James
									</li>
									<li>
										<h4>Position</h4>
										&emsp;CEO
									</li>
									<li>
										<h4>Contact Email</h4>
										&emsp;James@finance.com
									</li>
								</ul>
							</div>
						</div>
						<div className="team-card">
							<img className="team-card-img" src="./person2.jpg" alt="Woman in purple suit" />
							<div className="team-card-text">
								<ul>
									<li>
										<h4>Name</h4>
										&emsp;Jennifer
									</li>
									<li>
										<h4>Position</h4>
										&emsp;CFO
									</li>
									<li>
										<h4>Contact Email</h4>
										&emsp;Jen@finance.com
									</li>
								</ul>
							</div>
						</div>
						<div className="team-card">
							<img className="team-card-img" src="./person3.jpg" alt="Man in suit" />
							<div className="team-card-text">
								<ul>
									<li>
										<h4>Name</h4>
										&emsp;Alex
									</li>
									<li>
										<h4>Position</h4>
										&emsp;Head Analyst
									</li>
									<li>
										<h4>Contact Email</h4>
										&emsp;Alex@finance.com
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>
			<style jsx>
				{`
					.grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						gap: 4rem;
						padding: 5rem 1rem;
						margin: 0 auto;
						max-width: ${theme.maxWidth};
					}

					.grid-item {
						text-align: center;
					}

					.grid-item h2 {
						margin-bottom: 1rem;
					}

					.grid-item div {
						font-size: 4rem;
						color: ${theme.colors.main};
					}

					.grid-item p {
						text-align: justify;
					}

					.slogan {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						text-align: center;
						min-height: 30vh;
						color: ${theme.colors.light};
						background: linear-gradient(#3337, #3337),
							url("./building.jpg") no-repeat center center/cover;
						background-attachment: fixed;
					}

					.slogan h2 {
						font-size: 3rem;
						margin-bottom: 1rem;
					}

					.team {
						margin: 2rem 0;
					}

					.team h2,
					.team p {
						text-align: center;
						padding: 0 1rem;
					}

					.team h2 {
						font-size: 2rem;
						margin-top: 2rem;
						margin-bottom: 1rem;
					}

					.team p {
						margin-bottom: 1rem;
					}

					.team-grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
					}

					.team-card {
						display: flex;
						margin: 2rem auto;
						padding: 1rem;
						border: 1px solid #fafafa;
						box-shadow: 5px 5px 0.5rem #3338;
					}

					.team-card-img {
						max-width: 300px;
						max-height: 300px;
						margin-right: 2rem;
					}

					.team-card-text {
						padding: 1rem;
					}

					.team-card-text ul {
						list-style: none;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
					}

					@media (max-width: 1660px) {
						.team-grid {
							grid-template-rows: repeat(3, 1fr);
							grid-template-columns: 1fr;
						}
					}

					@media (max-width: 700px) {
						.grid {
							grid-template-columns: 1fr;
						}
					}

					@media (max-width: 600px) {
						.team-card {
							flex-direction: column;
						}

						.team-card-img {
							margin-right: 0;
						}

						.team-card-text ul li {
							margin: 0.5rem 0;
						}
					}
				`}
			</style>
		</Layout>
	);
};

export default Index;
