module.exports.factorial = (n) => {
  if(n = 1) {
    return 1;
  } else {
    return n * this.factorial(n-1);
  }
}