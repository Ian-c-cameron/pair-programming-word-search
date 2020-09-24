const transpose = require(`./transpose`);
const wordSearch = (letters, word) => {
    let reverse = word.split('').reverse().join('');
    let output = false;
    if (test(letters, word)) {
        return true;
    }
    if (test(letters, reverse)) {
        return true;
    }
    let flip = transpose(letters);

    if (test(flip, word)) {
        return true;
    }
    if (test(flip, reverse)) {
        return true;
    }



};
const test = (letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD');


module.exports = wordSearch;