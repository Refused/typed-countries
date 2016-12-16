const fs = require("fs");
const _ = require("lodash");
const countries = require("../dist").countries;
const provinces = require('provinces');

const output = countries.map(country => {
    // only populate the countries states array if it is currently empty
    if( country.states.length === 0 ) {
      let newStatesToLoad = _.orderBy(_.filter(provinces, ['country', country.iso]), ['name'], ['asc']);
      // proceed if there are new states / provinces / territories to load
      if( newStatesToLoad.length > 0){
        _.each(newStatesToLoad, function (state) {
          let stateObject = {}
          // some regions in the provinces package do not have short names so handle the state key accordingly
          if( state.short !== undefined ){
            stateObject = {
              "iso": state.short,
              "name": state.name
            }
          }else{
            stateObject = {
              "iso": state.name,
              "name": state.name
            }
          }
          country.states.push(stateObject)
        })
      }
    }
    return country
})

fs.writeFileSync("./.tasks/output.json", JSON.stringify(output, null, 4));
