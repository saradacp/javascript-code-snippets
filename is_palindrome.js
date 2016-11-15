function isPalindrome (str) {
  var m = Math.abs(str.length/2);
  var l = str.length;
  for (var i =0; i < m ; i++) {
    if ( str[i] !== str[l-i-1]) {
      return false;
    }
  }
  return true;
}
