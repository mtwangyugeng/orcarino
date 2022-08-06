import { writable } from "svelte/store"

export const numOfPages = writable(10);
export const currPage = writable(0);


let n = 0;
export const previews = writable([]);

let neo = []
for (let i = 0; i < 10; i++) {
    neo.push({
        id: n++,
        isPrivate: true,
        votes: 2500,
        title: "Salamanderman Theme",
        author: "Salanmander man",
        views: 20000
    })
}

previews.set(neo)