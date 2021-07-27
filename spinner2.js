let timer = 0

const animate = (count) => {
  const output = function(char, timer) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
  }
  const update = () => timer += 300;
  if (count == undefined) {
    count = 0
  }
  output('\r|', timer);
  update(count);
  output('\r/', timer);
  update(count);
  output('\r-', timer);
  update(count);
  output('\r\\', timer)
  update(count);
  if (count < 50) {
    count++
    return animate(count);
  }
};

console.log(animate())