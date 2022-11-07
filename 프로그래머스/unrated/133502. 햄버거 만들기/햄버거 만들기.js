function solution(ingredient) {
  const stk = [];
  let cnt = 0;
  ingredient.map((item, idx) => {
    stk.push(item);
    if (stk.length >= 4) {
      const find = stk.slice(-4).join("");
      if (find === "1231") {
        stk.pop();
        stk.pop();
        stk.pop();
        stk.pop();
        cnt++;
      }
    }
  });

  return cnt;
}