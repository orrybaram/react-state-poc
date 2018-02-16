import React, { Component } from 'react';

export default class Cell extends Component {
  render() {
    return (
      <div style={{display: 'inline-block', width: '100px', height: '20px', border: '1px solid blue', position: 'relative'}}>
        {this.props.data}
      </div>
    )
  }
}