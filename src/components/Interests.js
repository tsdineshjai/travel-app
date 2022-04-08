import React from "react";

import styled from 'styled-components';

function Interests() {
	return (
		<DivStyle>
			<h3>Interests</h3>
			<p>
				Thierry Henry is a massive food lover and loves chicken, peas, rice and
				his home made Carribean food.Socializing.
			</p>
		</DivStyle>
	);
}

export default Interests;

const DivStyle = styled.div`
	margin-top: -5px;
	width: 247px;
	height: 201px;
	h3 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 150%;
		width: 242.71px;
		height: 21px;
	}
	p {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 10.24px;
		line-height: 150%;
		color: #dcdcdc;
		margin-top:5px;
	}
`;
