import {getAll, save as chromeSave} from './storage';

class Store {
  constructor() {
    this.accounts = [];
  }

  load() {
    // this can be async/await
    return getAll().then((data) => {
      this.accounts = data;
    });
  }

  save(account) {
    // save to chrome (and to internal accounts!)
    // this can be async/await
    chromeSave(account);
    if (this.accounts.length > 0) {
      this.accounts = [account, ...this.accounts];
    } else {
      this.accounts = [account];
    }
  }

  remove(account) {
    // remove from chrome (and from internal accounts!)
  }
}

export default new Store();
