import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhatSapp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.headingText}>Whatsapp</Text>

        <View style={styles.story}>
          <ScrollView contentContainerStyle={styles.scroll} horizontal  showsHorizontalScrollIndicator={false}>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
          <View style={styles.singleCard}>
          <Image source={{uri: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'}} style={styles.cardImage} />
          </View>
            
           
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WhatSapp;

const styles = StyleSheet.create({
  container: {
    // padding:8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 8,
  },
  container2: {
    // Additional styling for the container2 if needed
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    
    padding: 4,
    
  },
  scroll: {
    
  },
  story: {
    margin: 10,
    
    
  },

  singleCard:{
    height: 70,
    width: 70,
    borderRadius: 35,
    
    borderColor: 'green',
    borderWidth: 3,
    marginRight:8,

  }
});
