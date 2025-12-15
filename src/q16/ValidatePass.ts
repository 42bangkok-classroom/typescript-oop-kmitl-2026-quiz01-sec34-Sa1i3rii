const password = process.argv[2];

const least8 = password.length >= 8;
const number = /\d/.test(password);
const uppcder = /[A-Z]/.test(password);

if (least8 && number && upper) {
  console.log("Valid");
} else {
  console.log("Invalid");
}


