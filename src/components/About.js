import React from 'react';
import styled from 'styled-components';

function About() {
  return (
		<DivStyle>
			<h3>About</h3>
			<p>
				A front end developer has one general responsibility: to ensure that
				website visitors can easily interact with the page. They do this through
				the combination of design,anything that you see, click on or otherwise use is the
				work of a front end developer.
			</p>
		</DivStyle>
	);
}
export default About

const DivStyle = styled.div`
	margin-top: 33px;
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
		margin-top: 5px;
	}
`;