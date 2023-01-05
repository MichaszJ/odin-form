const removePasswordError = (passwordElement: HTMLInputElement, passwordConfirmElement: HTMLInputElement): void => {
	passwordElement.classList.remove('password-error');
	passwordConfirmElement.classList.remove('password-error');

	const passwordError = document.querySelector<HTMLParagraphElement>('#password-error-text')
	if (passwordError) {
		passwordError.remove()
	}
}

const checkPassword = (): void => {
	const password = document.querySelector<HTMLInputElement>('#password');
	const passwordSection = document.querySelector<HTMLDivElement>('#password-input')
	const passwordConfirm = document.querySelector<HTMLInputElement>('#confirm-password');

	if (password != null && passwordConfirm != null && passwordSection != null) {
		if (password.value != passwordConfirm.value) {
			password.classList.add('password-error');
			passwordConfirm.classList.add('password-error');

			const passwordError = document.createElement('p');
			passwordError.textContent = 'Passwords do not match';
			passwordError.id = 'password-error-text';
			passwordSection.appendChild(passwordError);

		} else if (password.value == "" && passwordConfirm.value == "") {
			removePasswordError(password, passwordConfirm)
		} else {
			removePasswordError(password, passwordConfirm)
		}
	}
}