let answers = 0;

function eightQueen() {
    let invalidCells = [];

    let map = createMap(8);
    findQueenPosition(0);


    function findQueenPosition(row) {
        if(row === 8) {
            printSolution();
        } else {
            for (let col = 0; col <= 7; col++) {

                if(canPlaceQueen(row, col)) {
                    setQueen(row, col);
                    findQueenPosition(row + 1);
                    removeQueen(row, col); 
                }                
            }
        }
    }

    function canPlaceQueen(row, col) {
       
        for (let i = 0; i < invalidCells.length; i++) {
            const arr = invalidCells[i];

            for (let j = 0; j < arr.length; j++) {
                let currRow = arr[j][0];
                let currCol = arr[j][1];

                if(currRow == row && currCol == col) {
                    return false;
                }
            }
        }
        return true;
    }

    function removeQueen(row, col) {
        map[row][col] = 0;
        invalidCells.pop();
    }

    function setQueen(row, col) {
        map[row][col] = 1;
    
        const newInvalidCells = [];
        newInvalidCells.push([row, col]);
    
        let iteration = 0;
    
        for (let i = row - 1; i >= 0; i--) {
            iteration++;
            newInvalidCells.push([i, col]);
    
            if (!(col - iteration <= 0)) {
                newInvalidCells.push([i, col - iteration]);
            }
    
            if (!(col + iteration >= 8)) {
                newInvalidCells.push([i, col + iteration]);
            }
        }
    
        iteration = 0;
    
        for (let i = row + 1; i <= 7; i++) {
            iteration++;
    
            newInvalidCells.push([i, col]);
    
            if (!(col + iteration >= 8)) {
                newInvalidCells.push([i, col + iteration])
            }
    
            if (!(col - iteration < 0)) {
                newInvalidCells.push([i, col - iteration]);
            }
        }

        invalidCells.push(newInvalidCells);
    }

    function printSolution() {
        console.table(map);
        answers++;
        return;
    }
}


function createMap(n) {
    return Array.from(Array(8), () => new Array(8).fill(0))
}

eightQueen();

// should be 92
console.log(answers);