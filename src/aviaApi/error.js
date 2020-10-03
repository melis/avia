class AttemptsLimitExceeded extends Error {
  constructor() {
    super('Max attempts limit exceed');
    this.name = 'AttemptsLimitExceeded';
  }
}

class NotFoundError extends Error {
  constructor() {
    super('Not found');
    this.name = 'NotFoundError';
  }
}

class TemporaryError extends Error {
  constructor() {
    super('TemporaryError');
    this.name = 'TemporaryError';
  }
}

function getRepeatableData(getData, key, maxRequestsNumber = false) {
  try {
    let ret = getData(key);
    return ret;
  } catch (e) {
    if (e instanceof NotFoundError) throw e;
    if (e instanceof TemporaryError) {
      let i = 1;
      while (i !== maxRequestsNumber) {
        try {
          let retIn = getData(key);
          return retIn;
        } catch (e) {}
        i++;
      }
      throw new AttemptsLimitExceeded();
    }
  }
}
