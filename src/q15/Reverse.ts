const text: string = process.argv[2];
if (!text) {
  
  process.exit(1);
}

let reverse = "";
for (let i = text.length - 1; i >= 0; i--) {
  //console.log(text[i]);
  reverse += text[i];
}

console.log(reverse);
