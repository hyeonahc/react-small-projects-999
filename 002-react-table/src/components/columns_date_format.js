import { format } from 'date-fns';

export const COLUMNS_DATE_FORMAT = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    // Cell is the property controls what is rendered in the UI
    // Cell receives raw value
    // raw value is the data of date_of_birth from MOCK_DATA.json
    // raw value is string type so needs to be converted to date type value => new Date(string)
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
];
