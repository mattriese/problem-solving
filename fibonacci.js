function fibo(n, answers={1:1, 2:1}) {
  if (answers[n]) return answers[n];
  //if (n === 1 || n === 2) return 1;
  answers[n] = fibo(n-1, answers) + fibo(n-2, answers);
  return answers[n];
}

// function fibo(n, answers={}) {
//   if (n === 1 || n === 2) return 1;
//   answers[n-1] = fibo(n-1, answers);
//   answers[n-2] = fibo(n-2, answers);
//   return answers[n-1] + answers[n-2];
// }
