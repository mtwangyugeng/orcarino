import { delay } from "../_server";

const allData = [
    ['id', 'sheetId', 'uId', 'comment', 'postTime'],
    ['1', '4', '2134134asdSADWED', "Hey... That's pretty cool.", "6/28/2022"],
    ['2', '4', '2134134asdSADWED', "Hey... I can comment again", "6/28/2022"],
    ['3', '4', '2134134asdSADWED', "And again???", "6/29/2022"],
]

let nextId = 4;

export async function serverPostComment(uId, sheetId, comment) {
    await delay();
    const postTime = new Date().toLocaleDateString()
    const neo =  [nextId++, sheetId, uId, comment, postTime]
    allData.push(neo);

    return {success: true, loadout: neo}
}

export async function serverGetComments(SheetId) {
    await delay();
    const filteredArr = allData.filter(v => v[1] == SheetId);

    return {success: true, loadout: filteredArr}
}