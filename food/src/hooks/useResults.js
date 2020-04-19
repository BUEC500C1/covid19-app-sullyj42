import { useState, useEffect } from "react";
import yelp from '../api/yelp'


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
