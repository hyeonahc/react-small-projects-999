import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import GlobalFilteringTable from './components/GlobalFilteringTable';

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <GlobalFilteringTable />
    </div>
  );
}

export default App;
