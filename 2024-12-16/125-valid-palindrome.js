function isPalindrome(s) {
  let reversedStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("");

  if(s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));