const countDuplicate = (arr) => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = 2;
        }        
    }
    return (Object.values(obj).filter(el => el === 2)).length;
}

let arr = [1, 3, 1, 4, 5, 6, 3, 2, 6];

countDuplicate(arr);

// return count non-unique