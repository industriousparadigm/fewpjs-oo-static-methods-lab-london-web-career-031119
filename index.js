class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(str) {
    const badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"]
    let newStr = [this.capitalize(str.split(" ")[0])]

    str.split(" ").slice(1).forEach(word => {
      !badWords.includes(word) ? newStr.push(this.capitalize(word)) : newStr.push(word)
    });

    return newStr.join(" ")
  }

}