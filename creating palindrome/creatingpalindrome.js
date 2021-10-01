function creatingpalindrome(str) {
    var newstr = ''
    for(let i=str.length-1; i>=0; i--) {
      newstr += str[i]
    }
    return console.log(str + newstr);
  }
  creatingpalindrome('eser')