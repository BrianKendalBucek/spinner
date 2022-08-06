let timeoutTime = 200;
const arr = ['|', '/', '-', '\\'];
const spinStop = timeoutTime * arr.length;
const spinLoop = setInterval(() => { 
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${arr[i]}  `);
    }, timeoutTime * i);
  }
}, spinStop);

setTimeout(() => {
  clearInterval(spinLoop);
  process.stdout.write('\n');
}, 4000);