let timer = 0

const animate = (count) => {
  // set repetition counter
  const output = function(char, timer) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
  }
  const update = () => timer += 300;
  if (count == undefined) {
    count = 0
  }
  // set spinner speed
  // set animations
  output('\r|', timer);
  update(count);
  output('\r/', timer);
  update(count);
  output('\r-', timer);
  update(count);
  output('\r\\', timer)
  update(count);
  // setTimeout(() => {
  //   process.stdout.write('\r|');
  // }, timer) 
  // update(timer);
  // setTimeout(() => {
  //   process.stdout.write('\r/');
  // }, timer) 
  // update(timer);
  // setTimeout(() => {
  //   process.stdout.write('\r-');
  // }, timer) 
  // update(timer);
  // setTimeout(() => {
  //   process.stdout.write('\r\\');
  // }, timer)
  // update(timer);
  // setTimeout(() => {
  //   process.stdout.write('\r\\');
  // }, timer) 
  /// Limit Repetitions 
  if (count < 50) {
    count++
    return animate(count);
  }
};

console.log(animate())