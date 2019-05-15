//===============================================================
//  * Problem 5 : Non-Repeated Character from String
//* *************************************************************
function getNonRepeatedChar(str) {
  let charMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!charMap.get(str[i])) {
      charMap.set(str[i], 1);
    } else {
      var count = charMap.get(str[i]);
      charMap.set(str[i], count + 1);
    }
  }
  var val;
  for (const k of charMap.keys()) {
    if (charMap.get(k) == 1) val = k;
  }
  return val;
}
