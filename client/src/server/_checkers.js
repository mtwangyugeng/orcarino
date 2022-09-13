export function checkUsername(username) {
    const MAX_USERNAME = 12;
    const MIN_USERNAME = 6;
    if (username === "") return "The username can't be empty; ";
    if (username.length > MAX_USERNAME) return `The username is too long. max: ${MAX_USERNAME}; `;
    if (username.length < MIN_USERNAME) return `The username is too short. min: ${MIN_USERNAME}; `;
    return '';
}

export function checkPassword(password) {
    const MAX_PASSWORD = 12;
    const MIN_PASSWORD = 6;
    if (password === "") return "The password can't be empty; ";
    if (password.length > MAX_PASSWORD) return `The password is too long. max: ${MAX_PASSWORD}; `;
    if (password.length < MIN_PASSWORD) return `The password is too short. min: ${MIN_PASSWORD}; `;
    return '';
}

export function checkePasswordAndConfirmPassword(password, confirmPassword) {
    if (confirmPassword !== password) return "The confirmPassword and password does not match; ";
    return '';
}