import brandNameGen from "./brand.js";
import fantasyNameGen from "./name.js";
import priceGen from "./price.js";

function getUserInput() {
  return process.argv[2];
}

function main() {
  const input = getUserInput();
  const brand = brandNameGen(input);
  const name = fantasyNameGen(brand);
  const price = priceGen(name);
  return brand + " " + name + " " + price;
}

const output = main();
console.log(output);