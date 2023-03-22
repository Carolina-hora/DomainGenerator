let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domainLoop = (arrOfPronoun, arrOfAdj, arrOfNoun) => {
  //let arrOfDomain = [];
  for (let i = 0; i < arrOfAdj.length; i++) {
    for (let j = 0; j < arrOfPronoun.length; j++) {
      for (let k = 0; k < arrOfNoun.length; k++) {
        console.log(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k] + ".com");
      }
    }
  }
};

console.log("Hello World");
//console.log(domainL
//return arrOfDomain.push(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k])
domainLoop(pronoun, adj, noun);
