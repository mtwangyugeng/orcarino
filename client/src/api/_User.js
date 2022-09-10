import { writable } from "svelte/store";

// todo
export const user = writable(null);

export const isLoggingIn = writable(false);
export const isLoggingOut = writable(false);

export async function logOut() {
    user.set(null);
}

async function postLogin(username, password) {
    return {success: true, message: "Good"}
}

export async function logIn(username, password) {
    if (username === "") return "The username can't be empty";
    if (password === "") return "The password can't be empty";
    
    const status = await postLogin(username, password);
    if (!status.success) return status.message;

    user.set(4)
    return null
}

export async function createAccount(username, password, confirmPassword) {
    return null
}

