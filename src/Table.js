import React, { Component } from 'react';
import Row from './Row';
import { createRows, createSortedRows } from './utils';


export default class Table extends Component {
  constructor() {
    super();

    this.state = {
      sortedRows: createSortedRows(10),
      rows: createRows(10, 10),
    }
  }

  onCellBlur = (data) => {
    this.setState({
      rows: {
        ...this.state.rows,
        [data.rowIndex]: {
          ...this.state.rows[data.rowIndex],
          [data.columnIndex]: data.value,
        }
      }
    });
  }

  render() {
    const rows = this.state.sortedRows.map((rowIdx) => {
      return (
        <Row
          key={rowIdx}
          rowIndex={rowIdx}
          data={this.state.rows[rowIdx]}
          onCellBlur={this.onCellBlur}
        />
      )
    });

    return (
      <div style={{overflow: 'auto', width: '100%', position: 'relative', height: '100vh'}}>
        {rows}
      </div>
    )
  }
}