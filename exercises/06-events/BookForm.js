import React from 'react';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      read: false
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeRead = this.changeRead.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  changeTitle(ev) {
    // TODO change the title
    this.setState({
      title: ev.target.value
    });
  }
  changeRead() {
    // TODO change the read value
    this.setState({
      read: !this.state.read
    });
  }
  addBook() {
    // TODO update the parent!
    this.props.onBook({
      title: this.state.title,
      read: this.state.read
    });

    // reset the inputs
    this.setState({
      title: '',
      read: false
    });
  }
  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            value={this.state.title}
            onChange={this.changeTitle}
            placeholder='Title' type='text'
            className='form-control'
            id='title'
          />
        </div>
        <div className="form-group">
          <label htmlFor='read'>
            <span>Read: </span>
            <input
              checked={this.state.read}
              onChange={this.changeRead}
              type='checkbox'
              id='read'
            />
          </label>
        </div>
        <div className='form-group'>
          <button
            className='btn btn-default'
            onClick={this.addBook}
          >Add Book</button>
        </div>
      </div>
    );
  }
}

export default BookForm;
