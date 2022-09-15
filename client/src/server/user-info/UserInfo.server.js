import { findInCsvArray } from "../_server";

const userInfoData = [
    ['id', 'account', 'name', 'picUrl', 'bio'], 
    ['qweWQDAS21DAqww', 'alice123', 'Alice', 'https://static.wikia.nocookie.net/disney/images/7/75/Profile_-_Alice.jpeg/revision/latest?cb=20190312054522', 'This is Alice. Alice from Alice in the Wonderland. she stumpled upon the cursed Shadow Realm. will she survive.'],
    ['2134134asdSADWED', 'bob456', 'Bob', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg', 'This is Bob. Bob builds stuff, be like bob.'],
    ];


export async function serverGetUserInfo(id) {
    const index = findInCsvArray(userInfoData, 'id', id)
    if (index < 0) return {success:false, err: "User id does not exist."};
    return {success:true, account: userInfoData[index][1], name: userInfoData[index][2], picUrl: userInfoData[index][3], bio: userInfoData[index][4]}
}