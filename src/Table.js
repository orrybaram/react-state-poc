import React, { Component } from 'react';
import Row from './Row';

const createRowData = (numberOfColumns) => {
  const rowData = {}
  for(let i = 0; i < numberOfColumns; i++) {
    rowData[i] = i;
  }
  return rowData;
}

const createRows = (numberOfRows, numberOfColumns) => {
  const rows = {};
  const rowData = createRowData(numberOfColumns);
  for(let i = 0; i < numberOfRows; i++) {
    rows[i] = rowData;
  }
  return rows;
}

const createSortedRows = (numberOfRows) => {
  const sortedRows = [];
  for(let i = 0; i < numberOfRows; i++) {
    sortedRows.push(i);
  }
  return sortedRows;
}

export default class Table extends Component {
  constructor() {
    super();

    this.state = {
      sortedRows: createSortedRows(1000),
      rows: createRows(1000, 50),
    }
  }

  render() {
    const rows = this.state.sortedRows.map((rowIdx) => {
      return <Row rowIndex={rowIdx} data={this.state.rows[rowIdx]} />
    });

    return (
      <div style={{overflow: 'auto', width: '100%', position: 'relative', height: '100vh'}}>
        {rows}
      </div>
    )
  }
}