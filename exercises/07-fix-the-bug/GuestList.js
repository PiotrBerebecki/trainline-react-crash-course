import React from 'react';

import Guest from './Guest.js';

class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.state = {
      // guestList: props.guestList,
      name: '',
      brings: ''
    };
  }

  handleText(ev) {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  }

  addGuest() {
    const { name, brings } = this.state;
    this.props.onAdd({name, brings});

    this.setState({
      guestName: '',
      guestBrings: ''
    });
  }

  render() {
    const guests = this.props.guestList.map((guest,index) => {
      return (
        <Guest
          name={guest.name}
          key={guest.name}
          onRemove={this.props.onRemove}
          id={index}
        >
            {guest.brings}
        </Guest>
      );
    }, this);

    return (
      <div>
        <div>
          <div className='form-group'>
            <label>Name</label>
            <input
              value={this.state.guestName}
              onChange={this.handleText}
              placeholder='Name'
              type='text'
              className='form-control'
              id='guestName'
            />
          </div>
          <div className='form-group'>
            <label>Brings</label>
            <input
              value={this.state.guestBrings}
              onChange={this.handleText}
              placeholder='Brings'
              type='text'
              className='form-control'
              id='guestBrings'
            />
          </div>
          <div className='form-group'>
            <button
              className='btn btn-default'
              onClick={this.addGuest.bind(this)}
            >
              Add
            </button>
          </div>
        </div>
        <table className='table table-condensed'>
          <thead>
            <tr>
               <th>Name</th>
               <th>Brings</th>
               <th></th>
            </tr>
          </thead>
          <tbody>
            {guests}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GuestList;
