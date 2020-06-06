function lockBox(code, msg)  {
  if (typeof code !== 'number') {
    throw('failure');
  } 
  else if (typeof msg !== 'string') {
    throw('failure');
  }

  let securityCode = code;
  let message = msg;

  return {
    modCode(code, newCode) {
      if (code === securityCode) {
        securityCode = newCode;
        return newCode;
      }
    },

    modMessage(code, newMsg) {
      if (code === securityCode) {
        message = newMsg;
        return newMsg;
      }
    },

    revealMessage(code) {
      if (code !== securityCode) {
        throw new Error;
      }
      else {
        return message;
      }
    }
  }
}

module.exports = { lockBox };
