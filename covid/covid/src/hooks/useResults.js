import { useState, useEffect } from "react";
import jhcovid from '../api/jhcovid'

// GET By Country All Status
// https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
// Returns all cases by case type for a country. Country must be the slug from /countries or /summary. Cases must be one of: confirmed, recovered, deaths

// PARAMS
// from2020-03-01T00:00:00Z
// to2020-04-01T00:00:00Z

// https://api.covid19api.com/countries
// -- Returns a list of availble countries
// -- -- May be useful if returned data does not have lat/lon
// {
//     "Country": "Barbados",
//   "Slug": "barbados",
//   "ISO2": "BB"
// },
export default () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => { // async --> await
        setErrorMessage('No errors')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm, // Equivalent to term: term (key, value identical)
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses) // json object we want to store
        } catch (err) {
            console.log('')
            console.log(err)
            console.log('')
            setErrorMessage('Something went wrong ')
        }
    }

    // BAD CODE
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return [searchApi, results, errorMessage];
};
