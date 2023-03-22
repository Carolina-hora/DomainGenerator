const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".eu"];

// const capitalizeFirstLetter = (word) => {
//   word.charAt(0).toUpperCase() + word.slice(1)
// }

const domainLoop = (arrOfPronoun, arrOfAdj, arrOfNoun, arrOfExtensions) => {
  //let arrOfDomain = [];
  for (let i = 0; i < arrOfAdj.length; i++) {
    for (let j = 0; j < arrOfPronoun.length; j++) {
      for (let k = 0; k < arrOfNoun.length; k++) {
        for (let l = 0; l < arrOfExtensions.length; l++) {
          const capitalizedAdj =
            arrOfAdj[i].charAt(0).toUpperCase() + arrOfAdj[i].slice(1);
          const capitalizedNoun =
            arrOfNoun[k].charAt(0).toUpperCase() + arrOfNoun[k].slice(1);
          console.log(
            `${arrOfPronoun[j]}${capitalizedAdj}${capitalizedNoun}${arrOfExtensions[l]}`
          );
        }
      }
    }
  }
};

//return arrOfDomain.push(arrOfPronoun[j] + arrOfAdj[i] + arrOfNoun[k])
domainLoop(pronoun, adj, noun, extensions);
