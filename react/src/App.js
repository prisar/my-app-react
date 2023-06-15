import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table';

async function logJSONData() {
  const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/reciped9d7b8c.json");
  const jsonData = await response.json();
  console.log(jsonData);
}

function App() {
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    logJSONData();
  });
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
