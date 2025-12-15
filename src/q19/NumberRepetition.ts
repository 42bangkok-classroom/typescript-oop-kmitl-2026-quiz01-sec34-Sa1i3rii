const size = parseInt(process.argv[2], 10);

for (let i = 1; i <= size; i++) {
  console.log(String(i).repeat(size));
}
