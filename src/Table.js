import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import { createRows, createSortedRows } from './utils';
import { updateCellData } from './redux/actions';

const mapStateToProps = state => {
  return {
    rows: state.rows,
    sortedRows: state.sortedRows,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCellBlur: data => dispatch(updateCellData(data))
  }
}

class Table extends Component {
  render() {
    const rows = this.props.sortedRows.map((rowIdx) => {
      return (
        <Row
          key={rowIdx}
          rowIndex={rowIdx}
          data={this.props.rows[rowIdx]}
          onCellBlur={this.props.onCellBlur}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table)