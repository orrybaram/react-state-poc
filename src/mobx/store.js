import { observable, action } from 'mobx';
import { createRows, createSortedRows } from '../utils';

const AMOUNT_OF_ROWS = 50;
const AMOUNT_OF_COLUMNS = 20;

export const tableStore = observable({
  sortedRows: createSortedRows(AMOUNT_OF_ROWS),
  rows: createRows(AMOUNT_OF_ROWS, AMOUNT_OF_COLUMNS),

  updateCellData: action.bound(function({ rowIndex, columnIndex, value}) {
    this.rows[rowIndex][columnIndex] = value;
  }),
});

