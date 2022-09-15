import { serverGetUserInfo } from "$src/server/user-info/UserInfo.server";
import { writable } from "svelte/store"
import {user} from "./_User"

export const name = writable("");
export const account =  writable("");
export const picUrl = writable("");
export const bio = writable("");

async function getUserInfo(id) {
    const res = await serverGetUserInfo(id);
    if (!res.success) return
    name.set(res.name)
    account.set(res.account)
    picUrl.set(res.picUrl)
    bio.set(res.bio)
}

user.subscribe(id => {
    if(id === null) return;
    getUserInfo(id);
});

