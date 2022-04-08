import React from "react";
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitterSquare,
	faFacebookSquare,
	faInstagramSquare,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<DivStyle>
			<span href="#">
				<FontAwesomeIcon size="2x" icon={faTwitterSquare} />
			</span>
			<span href="#">
				<FontAwesomeIcon size="2x" icon={faFacebookSquare} />
			</span>
			<span href="#">
				<FontAwesomeIcon size="2x" icon={faInstagramSquare} />
			</span>
			<span href="#">
				<FontAwesomeIcon size="2x" icon={faGithubSquare} />
			</span>
		</DivStyle>
	);
}

export default Footer;

const DivStyle = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #161619;
	width: 317px;
	justify-content: space-around;

	span {
		margin: 20px;
    opacity:0.5;
	}
  span:hover{
    cursor: pointer;
  }
`;

