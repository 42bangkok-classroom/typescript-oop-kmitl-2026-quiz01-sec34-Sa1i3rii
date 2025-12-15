const password = process.argv[2];
if (password === undefined) {
  console.log("Please provide a password.");
  process.exit(1);
}
  if (password.length >= 8) {
  console.log("OK")
}
else{
  console.log("Too short");
}


