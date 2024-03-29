import { innerGetUserInfo } from "../user-info/UserInfo.server";
import { delay } from "../_server";

const allData = [
    ['id', 'sheetId', 'uId', 'comment', 'postTime', 'score'],
    ['1', '2', '2134134asdSADWED', "Hey... That's pretty cool.", "6/28/2022", '2'],
    ['2', '2', 'qweWQDAS21DAqww', "Hey... I can comment again", "6/28/2022", '9'],
    ['3', '2', '2134134asdSADWED', "And again???", "6/29/2022", '5'],
]

let nextId = 4;

function turnObj(colNames, row) {
    const temp = row.reduce((res, curr, i) => {
        res[colNames[i]] = curr;
        return res;
    }, {})
    const userinfo = innerGetUserInfo(temp.uId)
    temp.username = userinfo.account;
    temp.picUrl = userinfo.picUrl;
    return temp;
}

export async function serverPostComment(uId, sheetId, comment, score) {
    await delay();
    const postTime = new Date().toLocaleDateString()
    const neo =  [nextId++, sheetId, uId, comment, postTime, score]
    allData.push(neo);

    return {success: true, loadout: turnObj(allData[0], neo), sv: innerGetScoreAndVotes(sheetId)}
}

export async function serverGetComments(SheetId) {
    await delay();
    const filteredArr = allData.filter(v => v[1] == SheetId).map(v => turnObj(allData[0], v));
    console.log(filteredArr)
    return {success: true, loadout: filteredArr}
}

export function innerGetScoreAndVotes(sheetId) {
    const filteredArr = allData.filter(v => v[1] == sheetId)
    const res = filteredArr.reduce((cul, v) => {
        cul.score += (+v[5])
        cul.votes += 1
        return cul
    }, {score: 0, votes: 0})
    res.score = res.score / res.votes
    return res;
}