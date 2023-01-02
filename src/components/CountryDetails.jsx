import React from 'react';

function CountryDetails({country}) {
    
    return(
        <div>
            {country ? (
                <div>
                    <h1>{ country.name}</h1>
                    <p>{country.capital}</p>
                </div>          
                ) : null }
        </div>
    )


  }
  

export default CountryDetails;



//SYNTAX IS FOR CHECKS. FIRST IT WILL CHECK TO MAKE SURE country IS AVAILABLE
// IF IT'S NOT IT WILL NOT MOVE TO country.name
// {/* <h1>{country && country.name}</h1>
// <p>{country.capital}</p> */}


// The syntax above checks the one element if we have the country data
// if we do render the h1 and p if not do nothing (null)
