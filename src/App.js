import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';


function App() {
  //state used get an array of objects
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // fetching data from backend
    useEffect (()=> {
        const getAllCountries = async () => {
            try {
                let response = await axios.get(
                    "http://127.0.0.1:8000/api/countries/"
                );
                setCountries(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAllCountries();
    }, []);


    const countryClicked = country => {
      console.log(`${country.name}'s, capital is ${country.capital}`)
      setSelectedCountry(country);
      //this was incorrect on tu
    }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Country</h1>
      </header>
        <div className="layout">
          {/* countryClicked={countryClicked} was passed from a child component to the parent component.  */}
          <CountryList countries={countries} countryClicked={countryClicked} />
          <CountryDetails country={selectedCountry} />        
        </div>
    </div>
  );
}

export default App;


// 1.   The use state hook - patients will be for accessing the list of patietns, setpateints will be for changing whatever updating/changing that list

// 2. map will loop through and display the array coming from useState  
