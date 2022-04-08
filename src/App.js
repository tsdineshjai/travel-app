import React from "react";
import styled from "styled-components";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import GlobalStyle, { Container, Sys } from "./components/styles/Global.styled";

function App() {
	return (
		<Container>
			<GlobalStyle />
			<Info />
			<About />
			<Interests />
			<Footer />
		</Container>
	);
}

export default App;
