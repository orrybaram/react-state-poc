import { UPDATE_CELL_DATA } from './actions';
import { createRows, createSortedRows } from '../utils';

const AMOUNT_OF_ROWS = 50;
const AMOUNT_OF_COLUMNS = 20;

const initialState = {
  sortedRows: createSortedRows(AMOUNT_OF_ROWS),
  rows: createRows(AMOUNT_OF_ROWS, AMOUNT_OF_COLUMNS),
}

const tableApp = (state = initialState, { type, value, rowIndex, columnIndex}) => {
  switch(type) {
    case UPDATE_CELL_DATA:
      return Object.assign({}, state, {
        rows: {
          ...state.rows,
          [rowIndex]: {
            ...state.rows[rowIndex],
            [columnIndex]: value,
          }
        }
      });
    default:
      return state;
  }
}

export default tableApp;
