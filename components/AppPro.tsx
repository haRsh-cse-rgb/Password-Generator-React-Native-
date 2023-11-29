import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppPro() {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card , styles.green]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card , styles.blue]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
   fontSize:24,
   fontWeight:'bold',
   padding:12,
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8,
   
  },
  card:{ height:100,
    width:100,
    borderRadius:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:6,
    
  },
    
  red:{
    backgroundColor:'red'},
  
  green:{
    backgroundColor:'green',
  },
  
  blue:{
    backgroundColor:'blue'},
  },
  
  
)