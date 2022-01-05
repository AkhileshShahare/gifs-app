import SearchBar from './components/SearchBar/Index';
import { fetchGIFs } from './services/api';
import { debounce } from "lodash";
import { useState } from 'react';
import ViewGIFs from './components/ViewGIFs';

function App() {
  const [data, setData] = useState([])
  
  const handleSearch = debounce(async (e) => {
    const response = await fetchGIFs({ search_key: e.target.value });
    response.json().then((res) => setData(res));
  }, 2000);

  return (
    <>
      <SearchBar handleChange={handleSearch} />
      <ViewGIFs data={data} />
    </>
  );
}

export default App;
