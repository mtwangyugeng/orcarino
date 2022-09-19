import { innerGetCommunityById } from "../community/Community.server";
import { findInCsvArray } from "../_server";

const userTabsData = [
    ['id', 'tabIds'], 
    ['qweWQDAS21DAqww', '1;3;5'],
    ['2134134asdSADWED', '2;4'],
    ];


export async function serverGetUserTabs(id) {
    const index = findInCsvArray(userTabsData, 'id', id)
    if (index < 0) return {success:false, err: "User id does not exist."};

    const tabsString = userTabsData[index][1];
    const tabArr = tabsString.split(';');

    const finale = tabArr.map( tabId => {
        return innerGetCommunityById(tabId);
    });
    console.log(finale)
    return {success:true, userTabs: finale}
}

export async function serverUpdateUserTabs(id, neo) {
    const index = findInCsvArray(userTabsData, 'id', id)
    if (index < 0) return {success:false, err: "User id does not exist."};

    userTabsData[index][1] = neo;
    return {success:true}

}