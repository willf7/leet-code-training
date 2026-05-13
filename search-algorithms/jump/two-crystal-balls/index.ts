function twoCrystalBalls(breaks: Array<boolean>): number {
    let steps = Math.floor(Math.sqrt(breaks.length));

    let i = steps;

    for (; i < breaks.length; i += steps) {
        if (breaks[i]) {
            break;
        }
    }

    i -= steps

    for (let j = 0; j < steps && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

console.log(twoCrystalBalls([false, false, false, true, true]));
console.log(twoCrystalBalls([false, false, false, false, true]));
console.log(twoCrystalBalls([false, false, true, true, true, true, true]));
console.log(twoCrystalBalls([false, false, false, false, false, false, true, true, true]));

// O(n)
