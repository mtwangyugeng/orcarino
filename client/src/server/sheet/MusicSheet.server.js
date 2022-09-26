import { delay, findInCsvArray } from "../_server";

const allData = [
    ['id', 'notes'],
    ['1', ["000000000000", "space", "000000000100"]],
    ['2', ["000000000000", "space", "000000000100", "000000010100"]],
    ['4', ["000000000000", "space", "000000000100", "000000010100"]]
]


async function _helper(allData, colNum, target, rColNum) {
    await delay();
    const colName = allData[0][colNum];
    const index = findInCsvArray(allData, colName, target);
    if (index < 0) return {success: false};
    return {success: true, loadout: allData[index][rColNum]}
}

export function serverGetNotes(sheetId) {
    return _helper(allData, 0, sheetId, 1)
}