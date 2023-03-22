let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domainLoop = (arrOfPronoun, arrOfAdj, arrOfNoun) => {
  let arrOfDomain = [];
  for (let i = 0; i < arrOfAdj.length; i++) {
    for (let j = 0; j < arrOfPronoun.length; j++) {
      for (let k = 0; k < arrOfNoun.length; k++) {
        arrOfDomain.push(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k] + ".com");
      }
    }
  }
  return arrOfDomain;
};
console.log(domainLoop(pronoun, adj, noun));

console.log("Hello World");

//return arrOfDomain.push(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k])
