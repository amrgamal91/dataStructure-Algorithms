//===================================================================================
//  * Problem 13 : reverse string Recursively
//* *********************************************************************************
function reverse(str) {
  if (str.length < 2) return str;

  console.log(str.substring(1));
  return reverse(str.substring(1)) + str[0];
}

console.log(reverse("amro"));
