const q11: string = process.argv[2];

const containsAt: boolean = q11.includes('@');

if (containsAt) {
  console.log("Has @");
} else {
  console.log("No @");
}