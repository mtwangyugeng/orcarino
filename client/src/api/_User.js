import { serverLogIn, serverCreateAccount } from "$src/server/users/users.server";
import { writable } from "svelte/store";

export const user = writable(null);

export const isLoggingIn = writable(false);
export const isLoggingOut = writable(false);

export async function logOut() {
    user.set(null);
}

export async function logIn(username, password) {
    const res = await serverLogIn(username, password);
    if (res.success === false) return res.err;
    //TODO
    user.set(res.userCode)
    return null
}


export async function createAccount(username, password, confirmPassword) {

    const res = await serverCreateAccount(username, password, confirmPassword)
    if (res.success === false) return res.err;

    user.set(res.userCode)
    return null
}

