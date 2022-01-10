// createFrequencyCounter() accepts an array and returns a frequency counter object where
// keys are the numbers from the array and values are the number of times that number appears
// in the array. Will be called in findMultiples().
function createFrequencyCounter(array){
    let freqs = {};
    for(let val of array){
        let valCount = freqs[val] || 0;
        freqs[val] = valCount + 1;
    }
    return freqs;
}
// findMultiples accepts an array of numbers and a number 'minimumCount', and returns an array of all
// the numbers from the array that appear 'minimumCount' number of times in the array.
function findMultiples(nums, minimumCount) {
    if(arguments.length !== 2){
        return "error: Usage - findMultiples(array, minimumCount)"
    }
    let numsFreqs = createFrequencyCounter(nums);
    let result = [];
    console.log('numsFreqs= ', numsFreqs);
    for(let key in numsFreqs){
        console.log('key = ', key);
        if(numsFreqs[key] >= minimumCount){
            console.log('typeof key= ', typeof key);
            result.push(+key)
        }
    }
    return result;
}
