import {writable} from 'svelte/store'

export const makeRegex = (search) => {
    return new RegExp(`(^|\\s)${search}.*`, 'i')
}


export const searchMySheets = writable("");
export const searchMySheetsRegex = writable(/.*/);

export const searchCommunity = writable("");
export const searchCommunityRegex = writable(/.*/);

searchMySheets.subscribe(v => {
    searchMySheetsRegex.set(makeRegex(v));
})

searchCommunity.subscribe(v => {
    searchCommunityRegex.set(makeRegex(v));
})

