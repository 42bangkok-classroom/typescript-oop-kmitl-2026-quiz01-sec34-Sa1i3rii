const light = process.argv[2];
let lower = light.toLowerCase();
switch(lower) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("ready");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("Unknown");
}