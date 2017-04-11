const fs = require('fs')
const countries = require('../dist').countries
const query = require('country-query')

const output = countries.map(country => {
  const info = query.find('cca2', country.iso)
  let region = info && info.region || 'Unknown'
  let zipRegex = country.zipRegex || ''

  if (country.name === 'Antarctica' || country.iso === 'BV' || country.iso === 'TF' || country.iso === 'HM') {
    region = 'Antarctica'
  } else if (country.iso === 'SH') {
    region = 'Africa'
  } else if (country.iso === 'BQ') {
    region = 'Americas'
  }

  return Object.assign({ }, country, { zipRegex, region })
})

const regions = output.reduce((result, country) => {
  if (result.indexOf(country.region) === -1) {
    console.log(`Pushing ${country.region} from ${country.name}`)
    result.push(country.region)
  }

  return result
}, [])

fs.writeFileSync('./counries.json', JSON.stringify(output))
