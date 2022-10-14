import { serverGetSheetInfo } from "$src/server/community/Community.server";
import { serverGetNotes, serverSaveNotes } from "$src/server/sheet/MusicSheet.server";
import { writable, get } from "svelte/store";
import {currSheetId} from "./UserTabs"
import { sendReq } from "./_serverHelper";


export const id = writable(null);
export const isEditable = writable(false);
export const title = writable("Title Placeholder");
export const description = writable("Description placeholder");
export const comments = writable([]);

export const notes = writable([]);
export const isLoadingNotes = writable(false);

export const score = writable('');
export const numberOfVote = writable('')

currSheetId.subscribe(v => {
    if(v === null) return;

    id.set(v);
    isEditable.set(false);
    // todo: the async function to get datas from server
    description.set("Some description");


    getNotes(v);
    getCurrSheetInfo(v);
});

async function getNotes(sheetId) {
    console.log("!!!!!!!!Shetid: ", sheetId);
    isLoadingNotes.set(true);
    console.log("Loading Notes...");
    await sendReq(serverGetNotes(sheetId), notes);
    console.log("Finishing Loading Notes...");
    isLoadingNotes.set(false);
}

export async function postSaveNotes(sheetId, nts) {
    await sendReq(serverSaveNotes(sheetId, nts), notes);
}

notes.subscribe(v =>{
    console.log("!!!!!!!!notes: ", v)
})

async function getCurrSheetInfo(sheetId) {
    const res = await serverGetSheetInfo(sheetId);
    if (res.success) {

        title.set(res.loadout.title);
        score.set(res.loadout.score +"")
        numberOfVote.set(res.loadout.votes+"")
    } 
}
