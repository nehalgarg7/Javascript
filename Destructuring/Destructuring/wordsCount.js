function wordsCount(str) {
    let words = new Map();
    str.slice().trim().split(' ').map((e) => { words.set(e, words.get(e) + 1 | 1) });
    return words;
}

let paragraph = "Suicide is the self inflicted death people commit to ending their lives and escaping reality Many people around you commit suicide It is not easy to predict who it will be Mostly the youths think about attempting suicide statistically";

console.log(wordsCount(paragraph));