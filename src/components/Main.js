import React from "react";
import styled from "styled-components";
import Data from "../data";

function Main() {
	return (
		<>
			{Data.map((item) => {
				const {
					title,
					location,
					googleMapUrl,
					startDate,
					endDate,
					description,
					imageUrl,
				} = item;
				return (
					<Container>
						<img
							src={imageUrl}
							alt="country image"
							width="125px"
							height="168px"
						/>
						<InnerContainer>
							<h7>{location}</h7>
							<a href={googleMapUrl}>View On Google maps</a>
							<h8>{title}</h8>
							<h9>
								{startDate} - {endDate}
							</h9>
							<p>{description}</p>
						</InnerContainer>
					</Container>
				);
			})}
		</>
	);
}

export default Main;

const Container = styled.div`
	display: flex;
	width: 471px;
	height: 168px;
	gap: 5px;
	img {
		object-fit: cover;
	}
	margin: 8px;
  margin-top:1.5rem;
	padding-bottom: 18px;
	border-bottom: 0.5px solid grey;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-conent: space-between;
	overflow: hidden;
	margin: 8px;
	padding: 0.25rem 0.5rem;
	h7 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 10.24px;
		line-height: 12px;
		letter-spacing: 0.17em;
		color: #2b283a;
	}
	a {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 10.24px;
		color: #918e9b;
		letter-spacing: 0.5px;
		text-decoration: underline;
    cursor: pointer;
    
		
	}
	h8 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		line-height: 30px;
		color: #450427;
		margin-top: 8px;
	}
	h9 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 10.24px;
		line-height: 12px;
		color: #2b283a;
		margin-top: 8px;
	}
	p {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 10.24px;
		line-height: 150%; /* or 15px */
		color: #2b283a;
	}
`;
