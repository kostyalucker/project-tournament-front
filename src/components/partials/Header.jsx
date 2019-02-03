import React from "react"
import { Button } from "semantic-ui-react"
import styled from "styled-components"

const Controls = styled.div`
	display: flex;
	align-items: center;
`

const SignUpButton = styled(Button)`
	&& {
		margin-left: 30px;
	}
`

export const HeaderWrap = styled.div`
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
					<Button inverted type="success" color="green">
						Login
					</Button>
					<SignUpButton inverted type="success" color="green">
						Sign up
					</SignUpButton>
				</Controls>
			</HeaderWrap>
		)
	}
}

export default Header
