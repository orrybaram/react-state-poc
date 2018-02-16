import React, { Component } from 'react';

export default class Cell extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    }
    this.input = null;
  }

  onClick = () => {
    if (!this.state.isEditing) {
      this.setState({
        isEditing: true,
      }, () => {
        this.input.focus();
      });
    }
  }

  onBlur = (e) => {
    const { rowIndex, columnIndex } = this.props;
    this.setState({
      isEditing: false,
    });
    this.props.onBlur({
      rowIndex,
      columnIndex,
      value: e.target.value
    })
  }

  render() {
    console.log('rendering')
    return (
      <div
        onClick={this.onClick}
        style={{
          display: 'inline-block',
          width: '100px',
          height: '20px',
          border: '1px solid blue',
          position: 'relative'
        }}
      >
        {this.state.isEditing
          ? <input ref={ref => this.input = ref} defaultValue={this.props.data} onBlur={this.onBlur} />
          : <div>{this.props.data}</div>
        }
      </div>
    )
  }
}