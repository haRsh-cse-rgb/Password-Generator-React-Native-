import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCard() {
  return (
    <View>
      <Text style={styles.headingText}>ScrollCard</Text>

      <View style={styles.container}>
      <ScrollView horizontal>
        <View style={[styles.card , styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card , styles.green]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card , styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card , styles.black]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card , styles.violet]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
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
        backgroundColor:'purple'
    },
      
      green:{
        backgroundColor:'orange',
        
      },
      
      blue:{
        backgroundColor:'yellow'},
      black:{
        backgroundColor:'brown'},
      violet:{
        backgroundColor:'violet'},
})