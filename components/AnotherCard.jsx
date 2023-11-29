import { StyleSheet, Text, View ,  Linking, Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'

const AnotherCard = () => {

    function openLink (Linkurl) {
        Linking.openURL(Linkurl)
    }
  return (
    <View>
      <Text style={styles.headingText}>AnotherCard</Text>
      
      <View style={[styles.card, styles.elevated]}>
      <Text style={styles.description}>A sunset is a perfect conclusion. It's the silky, smooth collusion of skyburst reds and yellows into the calm of night. Sunset is the sigh of a late summer
             day and the dawn of a restful winter evening. A sunset is a symphony of color as it sings us all to sleep.</Text>
        <Image source={{ uri:'https://as2.ftcdn.net/v2/jpg/00/67/24/59/1000_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg'}} 
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sunset</Text>
            <TouchableOpacity style={styles.button} onPress={()=> openLink('https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/')}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
            
        </View>
      </View>
      </View>
    
  )
}

export default AnotherCard

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:12,
       },
       card:{
        padding:8,
       
        borderRadius:10,
        margin:16,
    },
    cardImage:{
        height:200,
        
    },
    cardBody:{

    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',


    },
    description:{
        color:'black',
    },
    container:{
     
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
})