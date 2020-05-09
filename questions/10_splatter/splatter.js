//write the splatter function

const splatter = () => {
  let val = 0;
  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];

    for (key in arg) {
      if (key) {
        key = 'a';
      }
    }

    val += arg['a']

  }

  return val;
};

module.exports = { splatter };
