import React, { Component } from "react"
import "./App.css"
import Sidebar from "./components/partials/Sidebar"
import Header from "./components/partials/Header"
import styled from "styled-components"
import background from "./backg.jpg"
import { Slogon } from "./pages/Home/Hero/style"

export const Content = styled.div``

export const HeroBg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Sidebar />
				<Content>
					<HeroBg src={background} />
					<Slogon>
						Play <br />with us
					</Slogon>
				</Content>
			</div>
		)
	}
}

export default App
