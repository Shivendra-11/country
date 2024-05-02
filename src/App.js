import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import SelectMenu from './components/SelectMenu';
import CountryCard from './components/CountryCard';
import CountryContainer from './components/CountryContainer';


function App() {
  const [query, setQuery] = useState('') ;  

  return (
    <>
    <Header/>
    <main>
    <div className='search-filter-container' > 
    <Search  setQuery={setQuery} />
    <SelectMenu/>
      </div>

    </main>
    <CountryContainer query={query}  />
   
    </>
  );
}

export default App;
