function solution(X, Y, m, n) {
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.pow(X[i], Y[j]) > Math.pow(Y[j], X[i])) {
        ans += 1;
      }
    }
  }
  return ans;
}

console.log(solution(100, 100, 100, 100));
