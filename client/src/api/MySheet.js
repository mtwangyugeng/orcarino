import { serverGetMySheets, serverPostNewSheet } from "$src/server/community/Community.server";
import { writable, get } from "svelte/store";
import {searchMySheetsRegex} from "./Search"
import { user } from "./_User";

let n = 0;

export const previews = writable([]);
export const isLoading = writable(false);

async function getMysheets(uid) {
    isLoading.set(true);
    const res = await serverGetMySheets(uid);
    console.log("mysheet:", res.loadout)
    if(res.success) previews.set(res.loadout);
    isLoading.set(false)

}

user.subscribe(uid => {
    if (uid === null) return;
    getMysheets(uid);
})



searchMySheetsRegex.subscribe((regex) => {
    previews.update(p => p.filter(v => regex.test(v.title)))
})

export const isAddingSheet = writable(false);

export async function addSheet(title) {
    if (title === "") return "Title can't be empty."
    /**
     * if input are valid:
     * 1. send post request
     * 2. if get valid response from server: 
     *  - update the user  
     *  - open new user tab of the newly created Sheet
    **/

    let res = await serverPostNewSheet(title, get(user));
    if (!res.success) return "Server Error, please try again later";

    previews.update(v => {
        return [...v, {
            id: n++,
            isPrivate: 'true',
            scores: 0,
            votes: 0,
            title: res.loadout[1],
            author: res.loadout[2],
            views: 0,
        }]
    })
    
    return null;
}