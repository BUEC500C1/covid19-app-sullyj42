import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import jhcovid from "../api/jhcovid";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultList";

const SearchScreen = () => {
    // console.log(props)
    const [term, setTerm] = useState("");
    [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (threshholdmin, threshholdmax) => {
        // price === '$' || '$$' || '$$$'
        return results.filter((result) => {
            // console.log(result.NewConfirmed)
            return (result.NewConfirmed < threshholdmax && result.NewConfirmed >= threshholdmin);
        });
    };
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
                onTermSubmit={() => searchApi()} // Rework this later...
            />
            {/*<Text>You have entered: {term}</Text>*/}
            {/*
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Text style={styles.errorMessage}>We have found {results.length} results</Text>
            */}
            {/*Need grouping logic to parse search results by price proprety*/}
            <ScrollView>
                <ResultsList
                    title="Nothing new"
                    results={filterResultsByPrice(0, 1)}
                />
                <ResultsList
                    title="Less than 100"
                    results={filterResultsByPrice(1, 100)}
                />
                <ResultsList
                    title="Less than 1000"
                    results={filterResultsByPrice(100, 1000)}
                />
                <ResultsList
                    title="The rest (less than 1,000,000,000"
                    results={filterResultsByPrice(1000, Infinity)}
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
        marginLeft: 15,
    },
});

export default SearchScreen;
