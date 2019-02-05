import React from "react"
import { Button, Modal, Checkbox, Form } from "semantic-ui-react"
import styled from "styled-components"

export const StyledButton = styled(Button)`
	&& {
		margin-right: 20px;
	}
`

export const StyledModal = styled(Modal)`
	&& {
		background: transparent;
		& > .content,
		.header {
			background: rgba(255, 255, 255, 0.1);
			color: #21ba45;
		}
		.ui.form .field > label {
			color: #21ba45;
		}
		.ui.checkbox input.hidden + label {
			color: #21ba45;
		}
	}
`
const LoginModal = () => (
	<StyledModal
		size="tiny"
		trigger={
			<StyledButton inverted type="success" color="green">
				Login
			</StyledButton>
		}
	>
		<Modal.Header>Login</Modal.Header>
		<Modal.Content>
			<Form>
				<Form.Field>
					<label>Email</label>
					<input placeholder="Email" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder="Password" />
				</Form.Field>
				<Button color="green" inverted type="submit">
					Log in
				</Button>
			</Form>
		</Modal.Content>
	</StyledModal>
)

export default LoginModal
