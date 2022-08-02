import {writable, get} from 'svelte/store'
import { user } from './_User';

// !userTabs
export const userTabs = writable([]);
export const setUserTabs = (target) => {
    userTabs.set(target);
}
export const readUserTabs = (uid) => {
    return userTabs.set([{title: "Ode to Joy", id:69}, {title: "Obito theme", id:22}]);
}

export const closeTab = (targetId) => {
    userTabs.update(prev => {
        return prev.filter(v => v.id !== targetId);
    })
    if(targetId === get(currSheetId)) {
        currSheetId.set(null);
    }
}

// TODO
user.subscribe(uid => {
    if(!uid) return;
    readUserTabs(uid);
})


// !currSheetId
export const currSheetId = writable(null);
export const setCurrSheetId = (target) => {
    currSheetId.set(target);
}

export const closeCurrSheet = () => {
    closeTab(get(currSheetId));
    currSheetId.set(null);
}
export const minimizeCurrSheet = () => {
    currSheetId.set(null);
}