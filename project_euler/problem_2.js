// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const topNum = 4000000;
let n1 = 0, n2 = 1, nextTerm;

let counter = 0

nextTerm = n1 + n2;


while (nextTerm <= topNum) {

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;

  if (nextTerm % 2 === 0) {
    counter += nextTerm;
  }
}

console.log(counter);