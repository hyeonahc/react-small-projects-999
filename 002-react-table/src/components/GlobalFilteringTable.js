import React, { useMemo } from 'react';
// 1. add useGlobalFilter hook
import { useTable, useGlobalFilter } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS_DATE_FORMAT } from './columns_date_format';
import './table.css';
import GlobalFilter from './GlobalFilter';

// two types of filtering
// 1) global filtering: find any of columns contains search text
// 2) column filtering: find in any particular of columns contains search text

const GlobalFilteringTable = () => {
  const columns = useMemo(() => COLUMNS_DATE_FORMAT, []);
  const data = useMemo(() => MOCK_DATA, []);

  // 2. add useGlobalFilter as second argument
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter
  );

  // 2. add state, setGlobalFilter
  // 1) state: table state that includes several properties
  // 2) setGlobalFilter: function to set the global filter text value
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(group => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default GlobalFilteringTable;
