import { writable, get } from "svelte/store"

export const numOfPages = writable(10);
export const currPage = writable(1);
export function toLeft () {
    currPage.update(prev => Math.max(1, prev - 1))
}
export function toRight () {
    currPage.update(prev => Math.min(get(numOfPages), prev + 1))
}


let n = 0;
export const previews = writable([]);

let neo = []
for (let i = 0; i < 30; i++) {
    neo.push({
        id: n++,
        isPrivate: false,
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

