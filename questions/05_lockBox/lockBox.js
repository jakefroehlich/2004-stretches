const lockBox = (code, message) => {

  if (typeof code !== 'number') {
    throw('failure');
  } 
  else if (typeof message !== 'string') {
    throw('failure');
  }

  return class {
    constructor(code, message) {
      this.code = code;
      this.message = message;
    }

    modCode(suppliedCode, newCode) {
      if (suppliedCode === this.code && typeof newCode === 'number') {
        this.code = newCode;
      }
    }

    modMessage(suppliedCode, newMessage) {
      if (suppliedCode === this.code && typeof newMessage === 'string') {
        this.message = newMessage
      }
    }

    revealMessage(suppliedCode) {
      if (suppliedCode !== this.code) {
        throw('failure');
      }
      else {
        return this.message;
      }
    }
  }
};

module.exports = { lockBox };
