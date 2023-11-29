import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image source={{ uri:'https://as2.ftcdn.net/v2/jpg/00/67/24/59/1000_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg'}} 
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sunset</Text>
            <Text style={styles.description}>A sunset is a perfect conclusion. It's the silky, smooth collusion of skyburst reds and yellows into the calm of night. Sunset is the sigh of a late summer
             day and the dawn of a restful winter evening. A sunset is a symphony of color as it sings us all to sleep.</Text>
        </View>
      </View>

    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:12,
    },
    card:{
        padding:8,
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        margin:16,
    },
    elevated:{
        backgroundColor:'black',
        elevation:4,
        shadowOffset:{
            height:1,
            width:1,
        }
    },
    cardImage:{
        height:200,
        
    },
    cardBody:{

    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',


    },
    description:{
        color:'white',
    },
    container:{
     
    }

})