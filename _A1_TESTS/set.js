let str = "abcabc"
let maxW = 3
const essemble = new Set();
for (let index = 0; index < str.length - maxW; index++) {
    let subStr = str.substring(index, index+maxW);
    essemble.add(subStr);
}
console.log(essemble)
function uniqueSubstringCount(str, maxW) {
    const essemble = new Set();
    for (let index = 0; index < str.length - maxW; index++) {
        let subStr = str.substring(index, index+maxW);
        essemble.add(subStr);
    }
    console.log(essemble)
    return essemble;
}
console.log(uniqueSubstringCount("abcabc", 3))
console.log(uniqueSubstringCount("abacab", 4))
console.log(uniqueSubstringCount("aaaa", 1))