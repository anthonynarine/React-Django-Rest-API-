import React from 'react';

function CountryList(props) {

  //NOTE THIS IS A CHILD COMPOENETN. This func will pass data to parent (app.js)
  //when a user clicks on one of the displayed countires. 
  //that event is made available through props (reason for not destructuring)
  const countryClicked = country => event => {
    props.countryClicked(country);

  }

    return(
      <div>
        {props.countries && props.countries.map(country => {
          return(
            <div key={country.name}>
              <h2 onClick={countryClicked(country)}>{country.name}</h2>
            </div>
          )
        })}
      </div>
    )

}


export default CountryList;


// line 6 - double arrow function aka Currying function
//  An easy way to grasp this is to remember that a curried/double arrow function is a function that implicitly returns another function(s).

// The above function without using arrow functions instead of double => 
// function myFunction(x) {
//   return function innerFunction(y) {
//      console.log('param1', x);
//      console.log('param2', y);
//   }
// }


//LINE 11 SYNTAX IS FOR CHECKS. FIRST IT WILL CHECK TO MAKE SURE COUNTRIES IS AVAILABLE
// IF IT'S NOT IT WILL NOT MOVE TO THE MAP FUNCTION $$ CAN BE STACKED 