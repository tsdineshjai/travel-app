import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKorvue } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

function Header() {
	return (
		<HeadStyle>
			<h3>
				<FontAwesomeIcon icon={faKorvue} size="2x" color="white" /> My Travel
				Journal
			</h3>
		</HeadStyle>
	);
}

export default Header;

const HeadStyle = styled.header`
	width: 100%;
	background: #a84545;
	box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
	border-radius:3px;
	display:flex;
	align-items:baseline;

	h3 {
		color: white;
		width: 100%;
		margin: 0 auto;
		font-family: "Poppins";
		font-style: normal;
		text-align: center;
		padding: 0.5rem 1rem;
	}
`;
