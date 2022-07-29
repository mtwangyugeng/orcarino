import {writable} from 'svelte/store'

export const userTabs = writable([]);
export const setUserTabs = (target) => {
    userTabs.set(target);
}
export const readUserTabs = () => {
    return [{title: "Ode to Joy", id:69}, {title: "Obito theme", id:22}];
}

// TODO
setUserTabs(readUserTabs());


export const currSheetId = writable(null);
export const setCurrSheetId = (target) => {
    currSheetId.set(target);
}
