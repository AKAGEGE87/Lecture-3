const frends = [
  { firstName: "John", age: 30, ticket: "has ticket" },
  { firstName: "Jane", age: 15, ticket: "has ticket" },
  { firstName: "Bob", age: 35, ticket: "no ticket" },
  { firstName: "Alice", age: 15, ticket: "has ticket" },
  { firstName: "Charlie", age: 32, ticket: "no ticket" },
  { firstName: "David", age: 17, ticket: "has ticket" },
  { firstName: "Eve", age: 29, ticket: "no ticket" },
  { firstName: "Frank", age: 31, ticket: "has ticket" },
  { firstName: "Grace", age: 33, ticket: "no ticket" },
  { firstName: "Hank", age: 16, ticket: "has ticket" }
];

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const snacks = ["chips", "cookies", "candy", "soda", "popcorn"];

const allowedFrends = frends.filter(
  (i) => i.age >= 18 && i.ticket === "has ticket"
);
console.log(allowedFrends);

const frendNames = allowedFrends.map((i) => i.firstName);
console.log(frendNames);

const countFrends = frendNames.reduce((acc, i) => acc + 1, 0);
console.log(countFrends);

const concatArrays = fruits.concat(snacks);
console.log(concatArrays);

if (allowedFrends.length === 0) {
  console.log("Movie night is canceled!");
} else {
  console.log(
    `We have ${countFrends} friends coming. Frends list is: ${frendNames.join(
      ", "
    )}.`
  );
  console.log(`Snacks: ${concatArrays.join(", ")}.`);
}
