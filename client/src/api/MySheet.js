import { writable } from "svelte/store";
import {searchMySheetsRegex} from "./Search"

let n = 0;

export const previews = writable([]);

let neo = []
for (let i = 0; i < 16; i++) {
    neo.push({
        id: n++,
        isPrivate: true,
        votes: 2500,
        title: "Salamanderman Theme",
        author: "Salanmander man",
        views: 20000
    })
}
neo.push({
    id: n++,
    isPrivate: false,
    votes: 2500,
    title: "Chinchin Theme",
    author: "Salanmander man",
    views: 20000
})

previews.set(neo)

searchMySheetsRegex.subscribe((regex) => {
    previews.set(neo.filter(v => regex.test(v.title)))
})

export const isAddingSheet = writable(true);

export async function addSheet(title) {
    if (title === "") return "Title can't be empty."
    /**
     * if input are valid:
     * 1. send post request
     * 2. if get valid response from server: 
     *  - update the user  
     *  - open new user tab of the newly created Sheet
    **/
   // TODO
    let res = {success: true,  loadout: {
        id: n++,
        isPrivate: false,
        votes: 0,
        title: title,
        author: "Salanmander man",
        views: 0
    }};
    // TODO
    if (!res.success) return "Server Error, please try again later";
    
    previews.update(v => {
        return [...v, res.loadout]
    })

    isAddingSheet.set(false);

    return null;
}