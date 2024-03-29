import { StyleSheet,  } from 'react-native'
import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import StackNav from './src/navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  )
}

export default App

const st = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'white'
  },
  logo: {
    width:400,
    height: 400
  },
  welcome: {
    textAlign:'center',
    margin: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  txtInput: {
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    padding:10
  },
  bigBtn: {
    backgroundColor: '#FACF23',
    borderWidth:1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FACF23', 
    padding: 15,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    borderRadius: 12,
  },
  button1: {
    backgroundColor: 'white', 
    padding: 15,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 12,
  },
  button2: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 12,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'black',
    textAlign:'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#FACF23',
    fontSize: 14,
    fontWeight: 'bold',
  },
})