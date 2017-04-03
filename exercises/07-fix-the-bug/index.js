import React from 'react';

import GuestList from './GuestList.js';
import BirthdayInfo from './BirthdayInfo.js';

class BirthdayContentPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Birthday Party</h1>
        <BirthdayInfo/>
        <GuestList
          guestList={this.props.guestList}
          onRemove={this.props.onRemove}
          onAdd={this.props.onAdd}
        />
      </div>
    );
  }
}

export default class extends React.Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.state = {
      guestList: [
        {
          name: 'First Person',
          brings: 'Champanhe'
        },
        {
          name: 'Second Person',
          brings: 'Cake'
        },
        {
          name: 'Third Person',
          brings: 'Beer'
        }
      ]
    }
  }

  handleRemove(id) {
    console.log('App', 'handleRemove', id, typeof id);

    this.setState({
      guestList: this.state.guestList.filter((guest, index)=> {
        return index !== id;
      })
    });
  }

  addGuest(guest) {
    this.setState({
      guestList: [...this.state.GuestList, guest]
    });
  }

  render() {
    return (
      <BirthdayContentPage
        guestList={this.state.guestList}
        onRemove={this.handleRemove}
        onAdd={this.addGuest}
      />
    );
  }
}
