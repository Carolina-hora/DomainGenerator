const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

const domainLoop = (arrOfPronoun, arrOfAdj, arrOfNoun) => {
  for (let i = 0; i < arrOfAdj.length; i++) {
    for (let j = 0; j < arrOfPronoun.length; j++) {
      for (let k = 0; k < arrOfNoun.length; k++) {
        console.log(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k] + ".com");
      }
    }
  }
  return;
};

domainLoop(pronoun, adj, noun);

//Obs:
//just because our string will have the order pronoun+adj+noun doesn't mean this has to be the order of the nested loops.
//they can be in any order we like, we just need to call it in the correct other, i.e., arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k]
