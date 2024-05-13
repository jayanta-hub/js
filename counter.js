let count = 0;
let numOfCall = 0;
let elements = [{ A: 0 }, { B: 1 }, { C: 2 }, { D: 3 }];
let numOfCallCount = 0;
// const counter = () => {
//   let output = "";
//   let keys = elements
//     .map((e) => {
//       return Object.keys(e);
//     })
//     .flat();
//   numOfCall = numOfCall + 1;
//   elements[count][keys[count]] = elements[count][keys[count]] + 1;
//   output = elements[count];
//   if (numOfCall < elements.length) {
//     count = count + 1;
//   } else {
//     count = numOfCallCount;
//     numOfCallCount = numOfCallCount + 1;
//   }
//   return output;
// };

const getNextElement = (() => {
  let currentIndex = 0;
  return () => {
    const element = elements[currentIndex];
    currentIndex = (currentIndex + 1) % elements.length;
    return element;
  };
})();

const counter = () => {
  const element = getNextElement();
  const key = Object.keys(element)[0];
  console.log("🚀 ~ counter ~ key:", key);
  element[key]++;
  return { ...element };
};

console.log(counter());
console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
