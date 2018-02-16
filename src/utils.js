export const createRows = (numberOfRows, numberOfColumns) => {
  const rows = {};
  for(let i = 0; i < numberOfRows; i++) {
    rows[i] = {};
    for(let j = 0; j < numberOfColumns; j++) {
      rows[i][j] = "" + i + j;
    }
  }
  return rows;
}

export const createSortedRows = (numberOfRows) => {
  const sortedRows = [];
  for(let i = 0; i < numberOfRows; i++) {
    sortedRows.push(i);
  }
  return sortedRows;
}