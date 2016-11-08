import React, { Component } from 'react';
import './account-list.css';

export default class AccountList extends Component {
  openUrl(e) {
    // chrome.tabs.create({url: e.target.href})
  }

  render() {
    const {accounts} = this.props;
    return (
      <div className='account-list'>
        <h1 className='account-list__title'>Accounts</h1>
        <ul className='account-list-items'>
          {
            accounts.map(item => (
              <li key={item.id}><a className='account-list-items__link' onClick={this.openUrl} href={item.link}>{item.name}</a></li>
            ))
          }
        </ul>
      </div>
    );
  }
}
