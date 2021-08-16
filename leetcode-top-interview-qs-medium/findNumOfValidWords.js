/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}

 make a set for each word (and put them in an array)
 make a set for each puzzle (and put them in an array)
loop thru puzzle array, for each puzzle:
 loop thru array of wordSets, for each wordset:
    first check if first letter of puzzle is in word
    loop through letters in wordset and check if they are in puzzleset
        if so, increment answers for this puzzle's i

 maybe create an object that has every letter that shows up at all in any word, and value is which words(indezes) it shows up in.

 */
var findNumOfValidWords = function(words, puzzles) {
    const answer = new Array(puzzles.length);
    answer.fill(0);
    const wordSets = words.map( (word) => {
        let newSet = new Set(word.split(""));
        return newSet;
    });
    const puzzleSets = puzzles.map( (puzzle) => {
        let newSet = new Set(puzzle.split(""));
        return newSet;
    });
    for (let i = 0; i < puzzles.length; i++) {
        for (let word of wordSets) {
            let isValid = true;
            if (!word.has(puzzles[i][0])) continue;
            for (let letter of word) {
                if (!puzzleSets[i].has(letter)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                answer[i]++;
            }
        }
    }
    return answer;

};
