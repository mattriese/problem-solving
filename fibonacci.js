function fibo(n) {
  if (n === 1 || n === 2) return 1;
  return fubi(n-1) + fibo(n-2);
}
