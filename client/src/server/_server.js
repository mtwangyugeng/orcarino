const DELAY = 1000;

export function delay() {
    return new Promise(
        res => {
            return setTimeout(() => res(), DELAY)
        }
        )
}

/**
 * 
 * @param {Array} csvArray 
 * @param {string} colName 
 * @param {string} target 
 */
export function findInCsvArray(csvArray, colName, target) {
    let c = 0;
    while (csvArray[0][c] !== colName) {
        c++;
    }
    
    if (c >= csvArray[0].length) return -2;

    for (let i = 1; i < csvArray.length; i++) {
        if (csvArray[i][c] === target) return i;
    }
    return -1;
} 

