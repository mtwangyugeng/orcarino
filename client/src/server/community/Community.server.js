import { getUsernameByUid } from "../users/users.server";
import { delay, findInCsvArray } from "../_server";

let nextId = 5;
const allData = [
    ['id', 'title','author','views', 'score', 'votes', 'picUrl', 'isPrivate'],
    ['1', 'Salamanderman Theme', 'bob456', '220','10', '20', "data:image/jpeg;base64,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", 'false'],
    ['2', 'Dunkey Theme', 'alice123', '20000','5', '2000', "https://pbs.twimg.com/profile_images/676614171849453568/AZd1Bh-s_400x400.png", 'false'],
    ['4', 'Obito Theme', 'bob456', '1500', '8', '180', "data:image/jpeg;base64,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", 'true']
]

// const communityData = allData.filter(v => v[7] === 'false')

const ITEMS_PER_PAGE = 1;
export async function serverGetNumberOfPages() {
    await delay();
    const communityData = allData.filter(v => v[7] === 'false')
    return {success: true, loadout: Math.ceil(communityData.length / ITEMS_PER_PAGE)};
}


function getArrByPage(arr, pageNumber) {
    let start = (pageNumber - 1) * ITEMS_PER_PAGE;
    if (start < arr.length && arr[start][0] === 'id') start += 1;
    const end = start + ITEMS_PER_PAGE;

    const finale = [];

    let index = start;
    while (index < end && index < arr.length) {
        const c = arr[index]
        finale.push(
            {
                id: c[0],
                title: c[1],
                creater: c[2],
                views: c[3],
                score: c[4],
                votes: c[5],
                picUrl: c[6],
                isPrivate: c[7]
            }
        )
        index ++;
    }
    console.log("finale", finale)
    return finale
}

export async function serverGetCommunityByPage(pageNumber) {
    await delay();
    const communityData = allData.filter(v => v[7] === 'false')
    console.log("AllData", allData)
    const finale = getArrByPage(communityData, pageNumber)
    return {success: true, community: finale}
}

export async function serverGetCommunityByKeyword(keyword, pageNumber) {
    await delay();
    const communityData = allData.filter(v => v[7] === 'false')
    const regex = new RegExp(`(^|\\s)${keyword}.*`, 'i');
    const filterCommunityData = communityData.filter(v => regex.test(v[1]));
    console.log("filter", filterCommunityData)
    const finale = getArrByPage(filterCommunityData, pageNumber)
    return {success:true, community: finale}
}

export async function serverGetMySheets(uid) {
    const targetUsername = getUsernameByUid(uid);
    const t = allData.filter(v => targetUsername === v[2]);

    const finale = t.map(c => {
        return {
            id: c[0],
            title: c[1],
            creater: c[2],
            views: c[3],
            score: c[4],
            votes: c[5],
            picUrl: c[6],
            isPrivate: c[7]
        }
    })
    return {success:true, loadout: finale}
}

export function innerGetCommunityById(id) {
    const index = findInCsvArray(allData, 'id', id);
    const c = allData[index]
    const finale = {
            id: c[0],
            title: c[1],
            creater: c[2],
            views: c[3],
            score: c[4],
            votes: c[5],
            picUrl: c[6],
            isPrivate: c[7]
        }
    return finale;
} 

export async function serverPostNewSheet(title, uId){
    await delay();
    const neo = new Array(8).fill('');
    neo[0] = nextId++;
    neo[1] = title;
    neo[2] = getUsernameByUid(uId);
    neo[7] = 'true';
    allData.push(neo);
    return {success: true, loadout:neo};
}