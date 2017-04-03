import React from 'react';

class HiddenMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      label: 'Show',
      msg: 'Hello World'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const collapsed = !this.state.collapsed;
    this.setState({
      collapsed: collapsed,
      label: collapsed ? 'Show' : 'Hide'
    });
  }
  render() {
    const style = {
      display: this.state.collapsed ? 'none' : 'block'
    };

    return (
      <div>
        <button
          type='button'
          className='btn btn-default'
          onClick={this.onClick}
        >
          {this.state.label}
        </button>
        <div className='well' style={style}>
          {this.state.msg}
        </div>
      </div>
    );
  }
}

export default HiddenMessage;
