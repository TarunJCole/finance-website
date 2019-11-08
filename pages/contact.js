import React from "react";
import Layout from "../components/Layout";

import theme from "../styles/theme";

const Contact = () => {
	return (
		<Layout title="Contact">
			<section>
				<form>
					<h1 className="form-title">Contact Us</h1>
					<input type="text" name="name" placeholder="Name" />
					<input type="email" name="email" placeholder="Email" />
					<textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
					<input type="submit" value="Send" className="submit-button" />
				</form>
			</section>
			<style jsx>
				{`
					section {
						margin-top: 66px;
					}

					form {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						max-width: 600px;
						margin: 0 auto;
						min-height: 75vh;
						padding: 2rem;
					}

					.form-title {
						width: 100%;
						text-align: left;
						font-size: 2rem;
						margin-bottom: 0.5rem;
					}

					form > input,
					form > textarea {
						padding: 0.5rem;
						margin: 0.5rem 0;
						font-size: 1.05rem;
						width: 100%;
						max-width: 600px;
						border: none;
						border-radius: 5px;
						box-shadow: 3px 3px 0.3rem #3336;
					}

					form .submit-button {
						margin-top: 1rem;
						max-width: 200px;
						align-self: flex-start;
						cursor: pointer;
						color: ${theme.colors.light};
						background: ${theme.colors.main};
					}

					form .submit-button:hover {
						background-color: ${theme.colors.mainLight};
					}
				`}
			</style>
		</Layout>
	);
};

export default Contact;
