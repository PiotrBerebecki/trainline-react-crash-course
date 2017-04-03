import React from 'react';

class HiddenMessage extends React.Component {
  constructor() {
    super();
    // TODO implement this.state
    this.state = {
      collapsed: true,
      label: 'Show',
      msg: 'Such state'
    };
  }
  onClick(ev) {
    // TODO set a new state
    // TODO `label` should reflect the state of the component with "Hide" or "Show"
    // TODO collapsed should be toggled
    //
    const collapsed = !this.state.collapsed;

    this.setState({
      label: collapsed ? 'Show' : 'Hide',
      collapsed: collapsed
    });
  }
  render() {
    console.log(this.state);

    const style = {
      display: this.state.collapsed ? 'none' : 'block'
    };

    return (
      <div>
        <button
          type='button'
          onClick={this.onClick.bind(this)}
          className='btn btn-default'
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
