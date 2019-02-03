import React, { Component } from "react"
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react"
import styled from "styled-components"

export const SidebarWrap = styled.div`
	position: relative;
	height: 100%;
`

export const StyledButton = styled(Button)`
	&& {
		position: absolute;
		left: ${p => p.left}px;
		top: 10px;
		transition: 0.5s left ease;
	}
`

export default class CustomSidebar extends Component {
	state = { visible: false }

	toggle = () => {
		const { visible } = this.state
		if (visible) {
			this.setState({ visible: false })
		} else {
			this.setState({ visible: true })
		}
	}

	render() {
		const { visible } = this.state

		return (
			<SidebarWrap>
				<StyledButton
					circular
					inverted
					color="green"
					icon={visible ? "x" : "bars"}
					onClick={this.toggle}
					left={visible ? 155 : 20}
				/>
				<Sidebar
					as={Menu}
					animation="overlay"
					icon="labeled"
					inverted
					vertical
					visible={visible}
					width="thin"
				>
					<Menu.Item as="a">
						<Icon name="home" />
						Home
					</Menu.Item>
					<Menu.Item as="a">
						<Icon name="gamepad" />
						Games
					</Menu.Item>
					<Menu.Item as="a">
						<Icon name="camera" />
						Channels
					</Menu.Item>
				</Sidebar>
			</SidebarWrap>
		)
	}
}
