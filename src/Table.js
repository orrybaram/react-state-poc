import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Row from './Row';
import { createRows, createSortedRows } from './utils';

class Table extends Component {
  render() {
    const { tableStore } = this.props;

    const rows = tableStore.sortedRows.map((rowIdx) => {
      return (
        <Row
          key={rowIdx}
          rowIndex={rowIdx}
          data={tableStore.rows[rowIdx]}
          onCellBlur={tableStore.updateCellData}
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

export default inject('tableStore')(observer(Table));