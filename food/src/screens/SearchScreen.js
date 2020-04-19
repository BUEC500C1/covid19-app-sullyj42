import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/searchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultList';


const SearchScreen = () => {
    // console.log(props)
    const [term, setTerm] = useState('');
    [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    }
    // const filterResultsNoPrice = () => {
    //     // price === '$' || '$$' || '$$$'
    //     return results.filter(result => {
    //         return (!result.price.includes('$')) 
    //     });
    // }
    // console.log(results)
    // Reference to search API, error message, term
    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/*<Text>You have entered: {term}</Text>*/}
            {/*
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Text style={styles.errorMessage}>We have found {results.length} results</Text>
            */}
            {/*Need grouping logic to parse search results by price proprety*/}
            <ScrollView>
                <ResultsList
                    title='Cost Effective ($)'
                    results={filterResultsByPrice('$')}
                />
                <ResultsList 
                    title='Bit Pricier ($$)'
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList 
                    title='Big Spender ($$$)'
                    results={filterResultsByPrice('$$$')}
                />
                <ResultsList 
                    title='Yuge Spender ($$$$)'
                    results={filterResultsByPrice('$$$$')}
                />
            </ScrollView>
            {/*
            <ResultsList 
                title='Unknown Price'
                results={filterResultsNoPrice()}
            />
            */}
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        marginLeft: 15
    }
});

export default SearchScreen;
