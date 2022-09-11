import { serverLogIn } from "$src/server/users/users.server";
import { writable } from "svelte/store";

// todo
export const user = writable(null);

export const isLoggingIn = writable(false);
export const isLoggingOut = writable(false);

export async function logOut() {
    user.set(null);
}

async function postLogin(username, password) {
    const status = await serverLogIn(username, password);
    if (status !== null) return {success: false, message: status}
    return {success: true, message: "should be good"}
}

export async function logIn(username, password) {
    if (username === "") return "The username can't be empty";
    if (password === "") return "The password can't be empty";
    const status = await postLogin(username, password);
    if (!status.success) return status.message;
    user.set(4)
    return null
}

user.subscribe(v => {
    console.log("user change:", v)
})

export async function createAccount(username, password, confirmPassword) {
    return null
}

