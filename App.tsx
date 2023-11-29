/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppPro from './components/AppPro';
import ScrollCard from './components/ScrollCard';
import FancyCard from './components/FancyCard';
import AnotherCard from './components/AnotherCard';
import Contact from './components/Contact';
import WhatSapp from './components/WhatSapp';
import * as Yup from 'yup';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {Formik} from 'formik';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;



// const handlePress = () =>{

//   Alert.alert("You pressed the button");

// }

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(6 , 'Should be atleat 6 character in length')
  .max(12 , 'Should be max of 10 characters')
  .required('This is a required feild')
})


function App() {
  
  const [password , setPassword]=useState('');
  const [isGenerated , setisGenerated]=useState(false);
  const [lowerCase , setLowerCase]=useState(false);
  const [upperCase , setUpperCase]=useState(false);
  const [numbers , setNumbers]=useState(false);
  const [symbols , setSymbols]=useState(false);


  const generatePassword =(passwordLength:number)=>{

    let characterList ='';

    const upperCaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
    const digitChars='0123456789';
    const specialChars='!@#$%^&*()_+';

    if(upperCase){
      characterList+=upperCaseChars
    }
    if(lowerCase){
      characterList+=lowerCaseChars
    }
    if(numbers){
      characterList+=digitChars
    }
    if(symbols){
      characterList+=specialChars
    }

    const passResult  =  createdPassword(characterList , passwordLength);

    setPassword(passResult);

    setisGenerated(true);

  }
  const createdPassword =(characters:string , passwordLength:number)=>{
    let result='';
    for(let i=0 ; i<passwordLength ; i++){
      const charIndex=Math.round(Math.random() * characters.length)
      result+=characters.charAt(charIndex);
    }

    return result;
  }

  const resetPassword =()=> {

    setPassword('');
    setisGenerated(false);
    setLowerCase(false);
    setUpperCase(false)
    setNumbers(false);
    setSymbols(false)
    




  }

  
  return (
      <ScrollView style={styles.container1}>
    <SafeAreaView style={styles.container}>

      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Password Generator</Text>

        <Formik
       initialValues={{ passwordLength: '' }} 
     
       validationSchema={PasswordSchema}
      
       onSubmit={ values => {
        console.log(values);
        generatePassword(Number(values.passwordLength))
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         isValid,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
        
        <View style={styles.formCont}>
        <View style={styles.inputs}>
          <View style={styles.column}>
            <Text style={styles.passHeading}>Password Length</Text>
            {
              touched.passwordLength && errors.passwordLength && (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              )
            }
          </View>
            <TextInput style={styles.inputStyle} value={values.passwordLength} 
            onChangeText={handleChange('passwordLength')} placeholder='Ex . 8' keyboardType='numeric' placeholderTextColor='white'>

            </TextInput>
        </View>

        <View style={styles.inputs}>
          <Text style={styles.passHeading}>Include LowerCase</Text>
          <BouncyCheckbox disableBuiltInState
          isChecked={lowerCase}
          onPress={()=> setLowerCase(!lowerCase)}
          fillColor='green'/>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.passHeading}>Include UpperCase</Text>
          <BouncyCheckbox disableBuiltInState
          isChecked={upperCase}
          onPress={()=> setUpperCase(!upperCase)}
          fillColor='green'/>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.passHeading}>Include Special Characters</Text>
          <BouncyCheckbox disableBuiltInState
          isChecked={symbols}
          onPress={()=> setSymbols(!symbols)}
          fillColor='green'/>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.passHeading}>Include Numbers</Text>
          <BouncyCheckbox disableBuiltInState
          isChecked={numbers}
          onPress={()=> setNumbers(!numbers)}
          fillColor='green'/>
        </View>


        <View style={styles.formActions}>
          <TouchableOpacity style={styles.generate} disabled={!isValid} onPress={()=> handleSubmit()}><Text style={styles.passHeading}>Generate Password</Text></TouchableOpacity>
          <TouchableOpacity style={styles.reset}><Text style={styles.passHeading}  onPress={() => {handleReset(); resetPassword()}}>Reset</Text></TouchableOpacity>
        </View>
        </View>
       
       )}
     </Formik>
        </View>

        {
          isGenerated ? (<View style={styles.card}>
            <Text style={styles.cardText} selectable={true}>{password}</Text>
          </View>) : null
        }

     


    </SafeAreaView>
      </ScrollView>
  );
}




export default App;


const styles= StyleSheet.create({

  container1:{
    backgroundColor:'#2C3335',
    
  },
container:{
  // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin:10,
   
},
headingText:{
  fontSize:28,
  fontWeight:'bold',
  // padding:12,
  alignItems:'center',
  flex:1,
  justifyContent:'center',
  color:'white',

},

formContainer:{
  // flex: 1,
  // justifyContent: 'center',
},

inputs:{
  
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
 
  margin:6,

},

column:{
  

},
generate:{
 backgroundColor:'green',
 padding:8,
 borderRadius:10,
 marginRight:30,
},
reset:{
backgroundColor:'red',
padding:8,
borderRadius:10,
},

inputStyle:{
  borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8, // Optional: Add border radius for rounded corners
    padding: 10,
    color: 'white',
    

},

formActions:{
  
flex:1,
flexDirection:'row',
marginTop:30,
alignItems:'center',
justifyContent:'center'


},
passHeading:{
  color:'white',
  fontSize:18,
  margin:8,
  
},
errorText:{
color:'red',
margin:8,
},

formCont:{
 marginTop:50,
},
card:{

backgroundColor:'green',
margin:50,
alignItems:'center',
justifyContent:'center',
flex:1,
borderRadius:10,

},
cardText:{
  color:'white',
  fontSize:30,
  fontWeight:'bold',
  padding:8,
}
})
