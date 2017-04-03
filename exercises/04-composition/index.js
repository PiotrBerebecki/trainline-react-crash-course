import React from 'react';

class List extends React.Component {
  // TODO write your component here

  render() {
    const renderTopics = this.props.topics.map((topic, index) => {
      return <li className="list-group-item" key={index}>{topic}</li>;
    });

    return (
      <ul className="list-group">
        {renderTopics}
      </ul>
    );
  }
}

class Topics extends React.Component {
  constructor() {
    super();
    this.state = {
      topics: [
        'Component',
        'Props',
        'Composition'
      ]
    };
  }

  render() {
    return (
      <div>
        <List topics={this.state.topics} />
      </div>
    );
  }
}

export default Topics;
