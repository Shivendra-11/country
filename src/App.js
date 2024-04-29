
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import SelectMenu from './components/SelectMenu';
import CountryCard from './components/CountryCard';
import CountryContainer from './components/CountryContainer';

function App() {
  return (
    <>
    <Header/>
    <main>
    <div className='search-filter-container' > 
    <Search/>
    <SelectMenu/>
      </div>
<CountryContainer/>
    </main>
    <CountryContainer/>
   
    </>
  );
}

export default App;
