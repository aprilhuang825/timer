const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (num.includes(key)) {
    console.log(`setting timer for ${key} seconds...`);
    let time = key * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
});