import {writable} from 'svelte/store'

export const searchMySheets = writable("");
export const searchCommunity = writable("");

searchMySheets.subscribe(v => {
    console.log("Search my sheets: " + v)
})

searchCommunity.subscribe(v => {
    console.log("Search my community: " + v)
})