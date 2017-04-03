import React from 'react';
import BookForm from './BookForm.js';
import Book from './Book.js';

class Books extends React.Component {
  constructor() {
    super();
    this.onBook = this.onBook.bind(this);
    this.changeRead = this.changeRead.bind(this);
    this.state = {
      books: [
        { title: 'Node Prop', read: true },
        { title: 'JS Functions', read: false }
      ]
    };
  }

  onBook(book) {
    const updatedBooks = [...this.state.books, book];
    this.setState({
      books: updatedBooks
    });
  }

  changeRead(id, read) {
    const updatedBooks = [
      ...this.state.books.slice(0, id),
      { title: this.state.books[id].title, read: read},
      ...this.state.books.slice(id + 1)
    ];

    this.setState({
      books: updatedBooks
    });
  }

  render() {
    const books = this.state.books.map((book, index) => {
      return (
        <Book
          title={book.title}
          read={book.read}
          onRead={this.changeRead}
          id={index}
          key={index}
        />
      );
    });

    return (
      <div>
        <BookForm onBook={this.onBook} />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default Books;
