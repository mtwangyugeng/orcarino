import { serverGetCommunityByKeyword, serverGetCommunityByPage, serverGetNumberOfPages } from "$src/server/community/Community.server";
import { writable, get } from "svelte/store"
import { searchCommunity } from "./Search";

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
export const isLoadingPreviews = writable(false);


export async function getNumberOfPages() {
    const res = await serverGetNumberOfPages();
    if(!res.success) return;
    numOfPages.set(res.loadout);
}

export async function getCommunityByPage (pageNumber) {
    isLoadingPreviews.set(true);
    console.log("getCommunityByPage")
    const res = await serverGetCommunityByPage(pageNumber);
    if (!res.success) return;
    previews.set(res.community)
    
    isLoadingPreviews.set(false);
}

export async function getSearchCommunity (keyword, pageNumber) {
    isLoadingPreviews.set(true);
    const res = await serverGetCommunityByKeyword(keyword, pageNumber);
    if (!res.success) return;
    previews.set(res.community)

    isLoadingPreviews.set(false)
}

searchCommunity.subscribe(v => {
    
    getSearchCommunity(v, 1);

}) 

currPage.subscribe(v => {
    if(get(searchCommunity)) {
        getSearchCommunity(get(searchCommunity), v)
    } else {
        getCommunityByPage(v)
    }
});