import { writable, get } from "svelte/store";
import {currSheetId} from "./UserTabs"


export const id = writable(null);
export const isEditable = writable(false);
export const title = writable("Title Placeholder");
export const description = writable("Description placeholder");
export const comments = writable([]);

export const notes = writable([]);
export const score = writable(0);
export const numberOfVote = writable(0)

export function saveNotes(notes) {
    
}

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

    notes.set(["000000000000", "space", "000000000100"]);
    score.set(8)
    numberOfVote.set(20000)
});