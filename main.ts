let name1: string[] = ["Kishor", "Amita", "Roshan", "Harish"];

for (let value of name1) {
  console.log(value);
}

let name2: Array<string> = ["Tejas", "Shubham", "Vishal"];

for (let value of name2) {
  console.log(value);
}

let multipleData: Array<string | number> = [1, 2, "Hello", "Typescript"];

for (let value of multipleData) {
  console.log(value);
}
