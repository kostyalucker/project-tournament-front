import React from "react"
import { Button, Modal, Checkbox, Form, Input } from "semantic-ui-react"
import styled from "styled-components"

//TODO: Refactoring modals, create colors theme
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
const RegisterModal = () => (
	<StyledModal
		size="tiny"
		trigger={
			<StyledButton inverted type="success" color="green">
				Sign up
			</StyledButton>
		}
	>
		<Modal.Header>Sign up</Modal.Header>
		<Modal.Content>
			<Form>
				<Form.Field>
					<label>Nickname</label>
          <Input  placeholder="Nickname" />
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input placeholder="Email" type="email" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder="Password" type="password" />
				</Form.Field>
				<Form.Field>
					<label>Repeat password</label>
					<input placeholder="Password" type="password" />
				</Form.Field>
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button color="green" inverted type="submit">
					Submit
				</Button>
			</Form>
		</Modal.Content>
	</StyledModal>
)

export default RegisterModal
