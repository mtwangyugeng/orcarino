import {writable} from 'svelte/store'

export const currSheetId = writable(null);
export const setCurrSheetId = (target) => {
    currSheetId.set(target);
}
