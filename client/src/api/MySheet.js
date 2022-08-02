import { writable } from "svelte/store";

export const previews = writable(Array(17).fill({
    isPrivate: true,
    votes: 2500,
    title: "Salamanderman Theme",
    author: "Salanmander man",
    views: 20000
}));