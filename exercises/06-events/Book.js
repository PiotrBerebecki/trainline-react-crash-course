import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.changeRead = this.changeRead.bind(this);
  }

  changeRead() {
    this.props.onRead(this.props.id, !this.props.read);
  }

  // TODO add the missing event!
  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          <input
            type='checkbox'
            checked={this.props.read}
            onChange={this.changeRead}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
