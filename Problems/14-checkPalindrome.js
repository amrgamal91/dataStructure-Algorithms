//===================================================================================
//  * Problem 14 : check if string is palindrome
//* *********************************************************************************
function isPalindrome(str) {
  let rev = reverse(str);
  if (rev === str) return true;
  return false;
}

console.log(isPalindrome("kok"));
