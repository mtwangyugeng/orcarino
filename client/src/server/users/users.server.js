import {delay, findInCsvArray} from '../_server'

const MAX_USERNAME = 12;
const MIN_USERNAME = 6;
const MAX_PASSWORD = 12;
const MIN_PASSWORD = 6;

const userData = [
    ['username', 'password', 'id'], 
    ['alice123', '123456', 'qweWQDAS21DAqww'],
    ['bob456', 'asdfgh', '2134134asdSADWED'],
    ];

/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
export async function serverLogIn(username, password) {
    console.log("serverLogIn")
    await delay();
    if (username.length > MAX_USERNAME) return `The username is too long. max: ${MAX_USERNAME}`;
    if (username.length < MIN_USERNAME) return `The username is too short. min: ${MIN_USERNAME}`;
    if (password.length > MAX_PASSWORD) return `The password is too long. max: ${MAX_PASSWORD}`;
    if (password.length < MIN_PASSWORD) return `The password is too short. min: ${MIN_PASSWORD}`;

    const userIndex = findInCsvArray(userData, "username", username);
    if (userIndex < 0) return "Wrong username or password.";
    
    return null;
}