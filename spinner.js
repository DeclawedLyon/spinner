let timer = 0

const animate = (count) => {
  // set repetition counter
  if (count == undefined) {
    count = 0
  }
  // set spinner speed
  const update = () => timer += 300;
  // set animations
  setTimeout(() => {
    process.stdout.write('\r|');
  }, timer) 
  update(timer);
  setTimeout(() => {
    process.stdout.write('\r/');
  }, timer) 
  update(timer);
  setTimeout(() => {
    process.stdout.write('\r-');
  }, timer) 
  update(timer);
  setTimeout(() => {
    process.stdout.write('\r\\');
  }, timer)
  update(timer);
  setTimeout(() => {
    process.stdout.write('\r\\');
  }, timer) 
  /// Limit Repetitions 
  if (count < 50) {
    count++
    return animate(count);
  }
};

console.log(animate())