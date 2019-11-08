import React from "react";
import { FaRegEnvelope, FaPhone } from "react-icons/fa";

import theme from "../styles/theme";

const Footer = () => {
	return (
		<footer>
			<div className="left">
				<h3>Contact Us</h3>
				<ul>
					<li>
						<span className="icon">
							<FaRegEnvelope />
						</span>
						&emsp;contact@finance.com
					</li>
					<li>
						<span className="icon">
							<FaPhone />
						</span>
						&emsp;02145 854371
					</li>
				</ul>
			</div>
			<div className="right">
				<small>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur ab nesciunt
					nam laudantium eum, consectetur quaerat accusamus excepturi id atque voluptas, vitae
					expedita unde dolor ex error quis. Nostrum, molestiae. Ratione exercitationem inventore
					adipisci non, atque reiciendis nihil, molestias maiores deleniti, porro ipsa quod eius!
					Repellendus totam nemo repudiandae debitis incidunt sequi, dignissimos ad at officia
					ratione neque consequatur ipsa suscipit unde sed placeat corporis eum? Quaerat inventore
					asperiores numquam ea eligendi. Nesciunt possimus consectetur, officiis esse, accusantium
					nulla, magni inventore obcaecati modi commodi itaque numquam quia? Repudiandae distinctio
					corporis tenetur ipsum suscipit sequi placeat! Deserunt beatae suscipit minima, distinctio
					assumenda illo enim in unde vitae ducimus qui! Dolorum doloribus voluptatum blanditiis,
					sed voluptatibus perferendis ut distinctio veritatis nam reprehenderit eveniet repellendus
					quidem eius, sit fugit deleniti provident at et neque quis? Quaerat nemo, eos repellendus
					velit itaque, voluptatibus vitae fugiat magni exercitationem omnis expedita. Blanditiis
					deleniti quidem sequi?
				</small>
			</div>
			<style jsx>
				{`
					footer {
						display: grid;
						grid-template-columns: 1fr 1fr;
						padding: 2rem;
						background: ${theme.colors.dark};
						color: ${theme.colors.light};
					}

					footer .left {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}

					footer .left ul {
						list-style: none;
						margin-top: 0.5rem;
					}

					footer .left ul li {
						margin: 0.5rem 0;
						display: flex;
						align-items: center;
					}

					 {
						/* icon */
					}
					footer .left ul li .icon {
						font-size: 1.5rem;
					}

					footer .right small {
						color: #bbb;
						text-align: justify;
					}

					@media (max-width: 500px) {
						footer {
							grid-template-columns: 1fr;
						}

						footer div {
							margin: 1rem 0;
						}
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
