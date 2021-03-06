import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <input type="checkbox" checked={this.props.read}/>
      </div>
    );
  }
}

// TODO
Book.defaultProps = {
  title: '',
  read: false
};

class Library extends React.Component {
  render() {
    const read = true;
    const title = 'Professional Node.js: Building Javascript Based Scalable Software';

    return (
      <ul>
        {/* don't declare any attributes here */}
        <li><Book /></li>
        {/* TODO pass the title and read values to Book by using the Book tag attributes */}
        <li><Book title={title} read={read}/></li>
      </ul>
    );
  }
}

export default Library;
