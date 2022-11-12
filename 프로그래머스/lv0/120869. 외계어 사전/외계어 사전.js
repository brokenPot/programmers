function solution(spell, dic) {
  let answer = 2;
  spell.sort();
  const spellStr = spell.join("");
  for (let i = 0; i < dic.length; i++) {
    const arr = [...dic[i]];
    arr.sort();
    const wordStr = arr.join("");
    if (spellStr === wordStr) {
      answer = 1;
      break;
    }
  }
  return answer;
}