//===================================================================================
//  * Problem 15 : check if strings are rotations of each other or not
//  "IndiaUSAEngland" and s2= "USAEnglandIndia" true
//  "IndiaUSAEngland" and s2= "IndiaEnglandUSA"  false
//* *********************************************************************************
function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let concatination = str1 + str1;
    if (concatination.indexOf(str2) !== -1) return true;
    return false;
  }
}

console.log(isRotation("IndiaUSAEngland", "USAEnglandIndia")); //true
console.log(isRotation("IndiaUSAEngland", "IndiaEnglandUSA")); //false
