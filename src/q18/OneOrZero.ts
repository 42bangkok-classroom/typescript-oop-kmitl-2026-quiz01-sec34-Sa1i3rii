const size = Number(process.argv[2]);
for(let i = 0; i < size; i++){
  let str = "";
  const char = i % 2 === 0 ? "1" : "0";
  for(let j = 0; j < size; j++){
    str += char;
  }
  console.log(str);
}