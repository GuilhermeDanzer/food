import React from 'react'
import {View, TextInput, StyleSheet,} from 'react-native'
import { Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange,onTermSubmit}) =>{

  return(
    <View style={styles.viewStyle}>
      <Feather name='search' style={styles.iconStyle}/>
      <TextInput 
      onEndEditing={()=>onTermSubmit()}
      autoCorret={false}
      style={styles.inputStyle}
      placeholder='Search'
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#f0EEEE',
    height:50,
    borderRadius:5,
    marginTop:10,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  inputStyle:{
    flex:1,
    fontSize:18
  },
  iconStyle:{
    fontSize:35,
    alignSelf: 'center',
    marginHorizontal:10
  }
  
})

export default SearchBar