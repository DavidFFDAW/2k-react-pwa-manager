const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const validateEmail = formState => {
    const { email } = formState;
    return emailRegEx.test(email.toLowerCase());
};

const validatePassword = formState => {
    const { password } = formState;
    return passwordRegEx.test(password);
};

const currentValidatorsUsed = [validateEmail, validatePassword];

export function validateForm(currentFormState) {
    return currentValidatorsUsed.map(validator => validator(currentFormState)).every(validatorResult => Boolean(validatorResult));
}
