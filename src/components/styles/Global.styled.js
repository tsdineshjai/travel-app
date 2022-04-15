import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;  
}
body{
  background-color: rgba(40, 45, 53, 1);
  color: white;  
}
`;

export default GlobalStyle;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 550px;
	height: 704px;
	margin: 0 auto;
	padding: 0.5rem 1rem;
	background-color: #fffff;
	border-radius: 8.95px;
`;
