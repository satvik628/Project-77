//Codes for Project 77

import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert,KeyboardAvoidingView } from 'react-native';
//import SantaClaus from '../components/santaClaus.js';
import db from '../config';
import firebase from 'firebase/';
//import SantaClaus from '../components/santaClaus';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
     
      emailId : '',
      password: '',
     
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
  
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
     
        return  alert(
             'User Added Successfully',
          
         );
      })
      .catch((error)=> {
       
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
      });
    }
  




  render(){  
      
    return(
    <View syle={styles.container}>
    
    <Image
      source={{uri:'https://zaayega.com/blog/wp-content/uploads/2015/03/Benefits-of-selling-products-online-in-India.jpg'}}
      style={{ alignSelf: 'center', width: 250, height: 250,marginTop:0.1}}
      />
      <Text style={{alignSelf:'center',fontSize:36,marginTop:10}}>Welcome to BussinesPur App</Text>

    
    
        <TextInput
              style={styles.loginBox}
              placeholder="enter Mail Id"
              placeholderTextColor = "black"
              keyboardType ='email-address'
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            />
        
        <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="password you create"
              placeholderTextColor = "black"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
        
        <TouchableOpacity
                style={[styles.button,{marginBottom:20, marginTop:20}]}
                onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
                >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.userSignUp}}
                >
                <Text style={styles.buttonText}>New User?SignUp</Text>
              </TouchableOpacity>
        </View>
          
    )
            
    }

}


const styles = StyleSheet.create({
    container:{
      flex:1,
      color:'white',
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10,
      borderRadius:20,
      alignSelf:'center',
      marginTop:10,
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      alignSelf:'center',
      margin:10,
      backgroundColor:"blue",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      }
    },
  
    buttonText:{
      color:'white',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
})