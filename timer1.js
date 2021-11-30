const sound = function() {
  process.stdout.write('\x07');
  process.stdout.write('🔊')
}

const scheduleSound = function(delay) {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(() => {
      sound();
    }, delay * 1000);
  }
}

let numbers = process.argv.slice(2);
for (let num of numbers) {
  scheduleSound(num);
}

setTimeout(() => {console.log('\n');}, 10000);