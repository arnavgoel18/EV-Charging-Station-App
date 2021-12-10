import React, { Component } from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native'

function Login({navigation}){
    return(
        <View style={login.container}>
            <View style={login.inputContainer}>
                <TextInput
                    style={login.input}
                    placeholder="Username"
                />
                <TextInput
                    style={login.input}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>    
            <TouchableOpacity style={login.button} onPress={() => navigation.navigate('Home')}>
                <Text style={{color: '#fff', fontSize: 16,}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputContainer: {
        height: 120,
        justifyContent: 'space-between',
    },  
    input: {
        width: 200,
        height: 50,
        textAlign: 'center',
        borderBottomWidth: 1,
    },
    button: {
        width: '70%',
        height: 50,
        backgroundColor: '#EE6706',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Login