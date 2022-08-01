import { writable, get } from "svelte/store";
import {currSheetId} from "./UserTabs"


export const id = writable(null);
export const isEditable = writable(false);
export const title = writable("Title Placeholder");
export const description = writable("Description placeholder");
export const comments = writable([]);

export const notesWithIndex = writable([]);
let nextIndex = 0;
function iniNotes(notes) {
    let nextIndex = 0;
    const notesWithIndex = notes.map(note => {
        return {index: nextIndex++, note}
    })
    return {notesWithIndex, nextIndex};
}
export function deleteNote(i) {
    notesWithIndex.update(v => [...v.slice(0, i), ...v.slice(i + 1)]);
}
export function addNote(i) {
    notesWithIndex.update(v => [...v.slice(0, i + 1), {index:nextIndex++, note: "space"}, ...v.slice(i + 1)])
}

export const score = writable(0);
export const numberOfVoteDisplay = writable("");
function numberOfVoteToString(numberOfVote) {
    return numberOfVote >= 1000 ? Math.round(numberOfVote / 1000) + 'k' :
                             numberOfVote
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

    const notes = ["000000000000", "space", "000000000100"];
    nextIndex = 0;
    const temp = iniNotes(notes);
    notesWithIndex.set(temp.notesWithIndex);
    nextIndex = temp.nextIndex;

    const numberOfVote = 20000;
    score.set(8)
    numberOfVoteDisplay.set(numberOfVoteToString(numberOfVote))
});