import React, { useMemo } from 'react';
import { useTable } from 'react-table';
// 1. getting Data
import MOCK_DATA from './MOCK_DATA.json';
// 2. Define columns
import { COLUMNS } from './columns';
import { GROUPED_HEADER } from './grouped_header';
// 4. Building a basic table UI and apply styling code
import './table.css';

const BasicTable = () => {
  // Use React.useMemo to ensure that the data isn't recreated on every render
  const columns = useMemo(() => COLUMNS, []);
  // Grouped Header
  // const columns = useMemo(() => GROUPED_HEADER, []);
  const data = useMemo(() => MOCK_DATA, []);

  // 3. Using the useTable hook
  // You can shorten the code as the key and data have the same name (ES6)
  // useTable({columns, data})
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  // 5. Applying the table instance to markup
  // Use everthing given(functions and arrays) and deploy them into table HTML tag to enable for a easy table creation
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // if you want to simplify the code, concat usetable and values
  /*
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = 
	useTable({
    columns: columns,
    data: data,
  });
	*/
  // 4. Building a basic table UI and apply styling code
  return (
    // 5. Destructure the values given from react table
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {/* Header is the key of object in columns array */}
            {/* Header from columns displays in th tag as a table header */}
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
              {/* Cell is the data */}
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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
  );
};

export default BasicTable;
