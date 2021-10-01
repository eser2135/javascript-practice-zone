function acronym(str) {
    var words = str.split(" ");
    console.log(((words.map(x => x[0])).join('')).toUpperCase())
    }
    acronym("united states america")