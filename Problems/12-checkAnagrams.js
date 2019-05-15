//===================================================================================
//  * Problem 12 : Check if 2 strings are anagrams or not (same letters but diff words)
//* *********************************************************************************
function compare(a, b) {
  if (a.length != b.length) return false;
  var y = a
      .split("")
      .sort()
      .join(""),
    z = b
      .split("")
      .sort()
      .join("");
  console.log(
    z === y
      ? a + " and " + b + " are anagrams!"
      : a + " and " + b + " are not anagrams."
  );
}

console.log(compare("word", "wrdo"));
console.log(compare("word", "wordo"));
