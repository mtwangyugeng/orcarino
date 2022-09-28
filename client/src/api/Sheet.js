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

export const score = writable(0);
export const numberOfVote = writable(0)


currSheetId.subscribe(v => {
    if(v === null) return;

    id.set(v);
    isEditable.set(false);
    // todo: the async function to get datas from server
    title.set("A title");
    description.set("Some description");
    comments.set([
        {id:1, content: "Cool sheet dude! I wish it is a bit longer.", postTime: "6/28/2022", score: 8, authorId:1},
        {id:2, content: "Terrible sheet! The notes are off by 10000 miles.", postTime: "6/29/2022",score: null, authorId:1}
    ]);

    getNotes(v)
    score.set(8)
    numberOfVote.set(20000)
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