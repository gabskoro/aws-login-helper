import {getAll, save as saveSync} from './storage';

class Store {
  constructor() {
    this.__accounts = [];
  }

  load() {
    return getAll().then((data) => this.__accounts = data);
  }

  get accounts() {
    return this.__accounts;
  }

  save(account) {
    // save to chrome (and to internal accounts!)
    saveSync(account);
    this.__accounts = [account, ...this.__accounts];
  }

  remove(account) {
    // remove from chrome (and from internal accounts!)
  }
}

export default new Store();
