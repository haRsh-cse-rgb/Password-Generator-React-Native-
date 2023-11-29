import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {

    const contacts =[
        {
            uid:1,
            name:"Kumar harsh",
            job:"CEO"
        },
        {
            uid:2,
            name:"Ankur",
            job:"Founder"
        },
        {
            uid:3,
            name:"Nishant",
            job:"Co-Founder"
        },
        {
            uid:4,
            name:"Kunal",
            job:"CEOO"
        },
        

    ];
  return (
    <View>
      <Text>Contact List</Text>

      <ScrollView style={styles.container} scrollEnabled={false}>
        {
            contacts.map((i) =>(
                <View key={i.uid}>
                    <Text>{i.uid}</Text>
                    <Text>{i.name}</Text>
                    <Text>{i.job}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({

    container:{

    }
})