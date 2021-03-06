/*
Fib
Write a function called fib which accepts a number and returns the nth number in  
the Fibonacci sequence. (1,1,2,3,5)
*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// test
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465