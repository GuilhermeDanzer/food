import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi,errorMessage,results] = useResults();

  console.log(results.price)
  console.log('111111')
  return (
    <View>
      <SearchBar term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text>:null}
       <Text>We have found {results.length} results</Text>
      <ResultList  title="Cost Effective"/>
      <ResultList  title="Bit Pricier"/>
      <ResultList  title="Big Spender"/>
    </View>
  )

}
const styles = StyleSheet.create({})

export default SearchScreen