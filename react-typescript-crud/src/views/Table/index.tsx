import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

interface TableModel {
  name: string;
  age: string;
  country: string;
}

const Table = () => {
  const tableData: TableModel[] = [
    {
      name: 'John Doe',
      age: '28',
      country: 'USA'
    },
    {
      name: 'Jane Smith',
      age: '34',
      country: 'USA'
    },
    {
      name: 'Samuel Green',
      age: '22',
      country: 'UK'
    },
    {
      name: 'Emily Johnson',
      age: '29',
      country: 'Australia'
    },
    {
      name: 'Viraj Raiyani',
      age: '21',
      country: 'India'
    }
  ];
  const [dataSource, setDataSource] = useState<TableModel[]>(tableData);
  const [searchValue, setSearchValue] = useState<string>('');
  const [nameValue, setNameValue] = useState<string>('');
  const [ageValue, setAgeValue] = useState<string>('');
  const [countryValue, setCountryValue] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TableModel | null;
    direction: 'asc' | 'desc';
  }>({
    key: null,
    direction: 'asc'
  });

  const handleSearch = (field: keyof TableModel, value: string): void => {
    const valueLowerCase = value.toLowerCase();
    const filteredData = tableData.filter((row) =>
      row[field].toLowerCase().includes(valueLowerCase)
    );
    setDataSource(filteredData);
  };
  const defaultRow: TableModel = { name: '', age: '', country: '' };

  const handleTableSearch = (value: string): void => {
    // const searchTableFields: (keyof TableModel)[] = ['name', 'age', 'country'];
    const searchTableFields =
      tableData.length > 0
        ? (Object.keys(tableData[0] || defaultRow) as (keyof TableModel)[])
        : [];
    const valueLowerCase = value.toLowerCase();
    const filteredData = tableData.filter((row) =>
      searchTableFields.some((field) =>
        row[field].toLowerCase().includes(valueLowerCase)
      )
    );
    setDataSource(filteredData);
  };

  const handleSort = (key: keyof TableModel) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction: newDirection });
    const sortedData = dataSource.sort((a, b) => {
      if (a[key] < b[key]) return newDirection === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setDataSource(sortedData);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search In Table"
        className="mb-4 w-full rounded border px-2 py-1 text-sm"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleTableSearch(e.target.value);
        }}
      />
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
            handleSearch('name', e.target.value);
          }}
          placeholder="Search Name"
          className="w-1/3 rounded border px-2 py-1 text-sm"
        />
        <input
          type="text"
          value={ageValue}
          onChange={(e) => {
            setAgeValue(e.target.value);
            handleSearch('age', e.target.value);
          }}
          placeholder="Search Age"
          className="w-1/3 rounded border px-2 py-1 text-sm"
        />
        <input
          type="text"
          value={countryValue}
          onChange={(e) => {
            setCountryValue(e.target.value);
            handleSearch('country', e.target.value);
          }}
          placeholder="Search Country"
          className="w-1/3 rounded border px-2 py-1 text-sm"
        />
      </div>

      <div className="overflow-hidden rounded border">
        <table className="w-full table-auto border-collapse text-left">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">Name</span>
                  {sortConfig.key === 'name' &&
                  sortConfig.direction === 'asc' ? (
                    <ArrowUp size={12} onClick={() => handleSort('name')} />
                  ) : (
                    <ArrowDown size={12} onClick={() => handleSort('name')} />
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">Age</span>
                  {sortConfig.key === 'age' &&
                  sortConfig.direction === 'asc' ? (
                    <ArrowUp size={12} onClick={() => handleSort('age')} />
                  ) : (
                    <ArrowDown size={12} onClick={() => handleSort('age')} />
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <span className="mr-2">Country</span>
                  {sortConfig.key === 'country' &&
                  sortConfig.direction === 'asc' ? (
                    <ArrowUp size={12} onClick={() => handleSort('country')} />
                  ) : (
                    <ArrowDown
                      size={12}
                      onClick={() => handleSort('country')}
                    />
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-sm">{row.name}</td>
                <td className="px-4 py-2 text-sm">{row.age}</td>
                <td className="px-4 py-2 text-sm">{row.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
