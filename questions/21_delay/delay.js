const delay = (str, time) => {
  setTimeout(function () {
    return new Promise((resolve, reject) => {
      if (resolve) {
        return str
      }
      else {
        reject(err);
      }
    })
  }, time)
}

module.exports = { delay };
