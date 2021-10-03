function acronym(str) {
    var words = str.split(" ")
    var len = words.length
    // with if loop
    var newstr = ""
    var acro = ""
    for(let i=0; i<=len-1; i++){
      newstr = words[0].split("")
      acro += newstr[0] 
      words.shift()
    }
      console.log(acro.toUpperCase())
  
    // with map function
    // var word = ((words.map(x=>x[0])).join("").toUpperCase())
    // console.log(word)
  }
  
  acronym('united states america')