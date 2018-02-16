import { UPDATE_CELL_DATA } from './actions';
import { createRows, createSortedRows } from '../utils';

const initialState = {
  sortedRows: createSortedRows(10),
  rows: createRows(10, 10),
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
  }

  return state;
}

export default tableApp;
