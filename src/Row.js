import React, { Component } from 'react';
import Cell from './Cell';

export default class Row extends Component {

  render() {
    const cells = Object.keys(this.props.data).map((cellData, columnIndex) => {
      return (
      <Cell
        key={columnIndex}
        data={this.props.data[cellData]}
        onBlur={this.props.onCellBlur}
        columnIndex={columnIndex}
        rowIndex={this.props.rowIndex}
      />
      )
    });

    return (
      <div style={{ position: 'relative', height: '20px' }}>
        <div style={{ height: 'auto', width: 'auto', position: 'absolute', whiteSpace: 'nowrap'}}>
          {cells}
        </div>
      </div>
    )
  }
}