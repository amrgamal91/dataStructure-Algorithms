//=========================== get the most common word in string ====================================
//===================================================================================================
function getMostcommonWord(str) {
  let wordsMap = new Map();
  let words = str.split(" ");
  let max = 0,
    mostWord = "";
  for (let i = 0; i < words.length; i++) {
    if (wordsMap.get(words[i])) {
      var count = wordsMap.get(words[i]) + 1;
      wordsMap.set(words[i], count);
      if (wordsMap.get(words[i]) > max) {
        max = wordsMap.get(words[i]);
        mostWord = words[i];
      }
    } else wordsMap.set(words[i], 1);
  }
  return { mostWord: mostWord, max: max };
}

getMostcommonWord("amr gamal metwaly amr amr gamal gamal gamal");
