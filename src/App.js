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

    // this can be async/await
    storeLoader.then(() => {
      this.setState({accounts: store.accounts || []});
    });

    window.d = {
      chrome,
      state: this.state
    };
  }

  saveAccount() {
    const {companyName} = this.state;

    if (companyName) {
      store.save({
        id: Date.now(),
        name: companyName,
        link: `https://${companyName}.signin.aws.amazon.com/console`,
      });

      this.setState({accounts: store.accounts});
    }
  }

  handleFormInput({target: {value}}) {
    this.setState({copmanyName: value});
  }

  render() {
    const {accounts} = this.state;

    return (
      <div className="container">
        <div className="from">
          <input className="form__input" type="text" onChange={this.handleFormInput} />
          <button className="form__button" onClick={this.saveAccount}>Add</button>
        </div>
        <AccountList accounts={accounts} />
      </div>
    );
  }
}

export default App;
