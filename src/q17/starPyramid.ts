const num = Number(process.argv[2]);
for(let i=0; i<num; i++){
  let str = "";
  for(let j=0; j<=i; j++){
    str += "* ";
  }
  console.log(str);
}