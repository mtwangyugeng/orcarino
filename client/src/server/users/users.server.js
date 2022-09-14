import { checkUsername, checkPassword, checkePasswordAndConfirmPassword } from '../_checkers';
import {delay, findInCsvArray} from '../_server'


const userData = [
    ['username', 'password', 'id'], 
    ['alice123', '123456', 'qweWQDAS21DAqww'],
    ['bob456', 'asdfgh', '2134134asdSADWED'],
    ];

function checkLogin(username, password) {
    return checkUsername(username) + checkPassword(password);
}

function checkCreateAccount(username, password, confirmPassword) {
    return checkUsername(username) + checkPassword(password) + checkePasswordAndConfirmPassword(password, confirmPassword);
}

/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
export async function serverLogIn(username, password) {
    await delay();

    const checker = checkLogin(username, password);
    if (checker !== "") return {success:false, err: checker};

    const userIndex = findInCsvArray(userData, "username", username);
    if (userIndex < 0) return {success:false, err: "Username does not exist."};
    
    const isPasswordMatch = userData[userIndex][1] === password;
    if (!isPasswordMatch) return {success:false, err: "Wrong username or password."};

    return {success:true, id: userData[userIndex][2]};
}

export async function serverCreateAccount(username, password, confirmPassword) {
    await delay();
    const checker = checkCreateAccount(username, password, confirmPassword);
    if (checker !== "") return {success:false, err: checker};

    const userIndex = findInCsvArray(userData, "username", username);
    if (userIndex >= 0) return {success:false, err: "the username already exists."}; 

    userData.push([username, password, username + 'asdSADWED']);
    return {success:true, id: username + 'asdSADWED'};;
}