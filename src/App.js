//https://console.aws.amazon.com/console/home
//https://infinum.signin.aws.amazon.com/console


import React, { Component } from 'react';
import AccountList from './account-list';
import store from './store';

import 'normalize.css';
import './app.css';

class App extends Component {
  componentWillMount() {
    const {storeLoader} = this.props;

    this.handleFormInput = this.handleFormInput.bind(this);
    this.saveAccount = this.saveAccount.bind(this);

    this.setState({accounts: []});

    storeLoader
      .then(() => this.setState({accounts: store.accounts}));
  }

  saveAccount() {
    const {companyName} = this.state;

    if (companyName) {
      store.save({
        id: Date.now(),
        name: companyName,
        link: `https://${companyName}.signin.aws.amazon.com/console`,
      });

      this.setState({
        accounts: store.accounts,
        companyName: ''
      });
    }
  }

  handleFormInput({target: {value}}) {
    this.setState({companyName: value});
  }

  render() {
    const {accounts, companyName} = this.state;

    return (
      <div className="container">
        <div className="from">
          <input
            className="form__input"
            type="text"
            onChange={this.handleFormInput}
            value={companyName} />

          <button className="form__button" onClick={this.saveAccount}>
            Add
          </button>
        </div>
        <AccountList accounts={accounts} />
      </div>
    );
  }
}

export default App;
