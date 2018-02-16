export const UPDATE_CELL_DATA = 'UPDATE_CELL_DATA';

export const updateCellData = ({ value, rowIndex, columnIndex}) => ({
  type: UPDATE_CELL_DATA,
  value,
  rowIndex,
  columnIndex,
});