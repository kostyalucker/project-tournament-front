import React from "react"
import styled from "styled-components"
import LoginModal from "../modals/Login"
import RegisterModal from "../modals/Register"

const Controls = styled.div`
	display: flex;
	align-items: center;
`

const HeaderWrap = styled.div`
	position: absolute;
	display: flex;
	justify-content: flex-end;
	top: 0;
	width: 100%;
	padding: 10px;
`

class Header extends React.Component {
	state = {}

	render() {
		return (
			<HeaderWrap>
				<Controls>
					<LoginModal />
					<RegisterModal />
				</Controls>
			</HeaderWrap>
		)
	}
}

export default Header
