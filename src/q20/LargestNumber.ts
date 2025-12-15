const q20: string[] = process.argv.slice(2);

if (q20.length === 0) {
  process.exit(1); 
}

const numbers: number[] = q20.map(Number);

if (numbers.some(isNaN)) {
    process.exit(1);
}

const largest: number = Math.max(...numbers);

console.log(largest);