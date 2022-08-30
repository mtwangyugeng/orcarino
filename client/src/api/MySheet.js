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

export function addSheet(title) {
    if (title === "") return "Title can't be empty."
    
    return null;
}