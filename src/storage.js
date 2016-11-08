const ACCOUNTS_KEY = 'awsAccounts';

export function getAll() {
  return __getByKey(ACCOUNTS_KEY);
}

function __getByKey(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (acc) => {
      resolve(acc[key] || []);
    });
  });
}

export function save(account) {
  return new Promise((resolve, reject) => {
    getAll().then((accounts) => {
      const list = {
        [ACCOUNTS_KEY]: [...accounts, account]
      };

      chrome.storage.sync.set(list, () => resolve());
    });
  });
}
