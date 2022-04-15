import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import GlobalStyle, { Container } from "./components/styles/Global.styled";

function App() {
	return (
		<Container>
			<Header />
			<Main />
		</Container>
	);
}

export default App;
