export async function sendReq(reqPromise, store) {
    const res = await reqPromise;
    if (!res.success) {
        return false;
    }
    console.log(res.loadout)
    store.set(res.loadout)
    return true;
}