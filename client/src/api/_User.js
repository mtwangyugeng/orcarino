import { writable } from "svelte/store";

// todo
export const user = writable(null);

export const isLoggingIn = writable(false);
export const isLoggingOut = writable(false);

export async function logOut() {
    user.set(null);
}

export async function logIn(username, password) {
    if (username === "") return "The username can't be empty";
    if (password === "") return "The password can't be empty";

    user.set(4)
    return "Incorrect username or password"
}

export async function createAccount(username, password) {
    return null
}

