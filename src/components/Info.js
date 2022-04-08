import React from "react";

import styled from "styled-components";

import LadyImage from "../images/lady.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
	return (
		<DivStyle>
			<img src={LadyImage} alt="" />
			<h3>Angelina Jolie</h3>
			<p>Frontend Developer</p>
			<a href="#">angelinajolie.website</a>

			<div className="btn-group">
				<button>
					<FontAwesomeIcon icon={faEnvelopeOpen} />
					<hr />
					Email
				</button>

				<button>
					<FontAwesomeIcon icon={faLinkedin} />
					Linkedin
				</button>
			</div>
		</DivStyle>
	);
}
export default Info;

const DivStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 1.5rem;
	margin-top: 44px;
	h3 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		line-height: 30px;
		margin-top: 21px;
		color: white;
	}
	& > div {
		display: flex;
		gap: 13px;
		margin-top: 13px;
		button:first-of-type {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: baseline;
			padding: 9px 13px 9px 11px;
			width: 115px;
			height: 34px;
			border: 1px solid #d1d5db;
			border-radius: 6px;
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
			gap: 8px;
		}
		button:last-of-type {
			background: #5093e2;
			color: white;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 9px 13px 9px 11px;
			border-radius: 6px;
			gap: 8px;
			border: none;
			width: 115px;
			height: 34px;
			text-align: center;
		}
	}
	p {
		margin: 7px;
		color: #f3bf99;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 12.8px;
		line-height: 15px;
		text-align: center;
	}
	a {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 10.24px;
		line-height: 150%;
		color: #f5f5f5;
		text-decoration: none;
	}

	& img {
		width: 325px;
		height: 325px;
		object-fit: cover;

		top: 44px;
		border-radius: 10px 10px 0px 0px;
	}
`;
