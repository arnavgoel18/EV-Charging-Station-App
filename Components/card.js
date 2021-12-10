import React, { Component } from 'react'

import { StyleSheet, View, Text, TouchableOpacity , ImageBackground} from 'react-native'

import image from '../assets/charginStationTesla.jpeg'

function card(props){

    return(
        <View style={cardStyle.cardMainContainer}>
                <TouchableOpacity style={cardStyle.cardContainer}>
                    <ImageBackground source={props.proImage} 
                    style={{width: '100%', height: '100%', 
                    overflow: 'hidden', borderRadius: 20}}>
                        <View style={cardStyle.time}>
                            <Text>{props.proTime}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            <Text style={cardStyle.chargingStationName}>{props.proName}</Text>
        </View>
    )
}

const cardStyle = StyleSheet.create({
    cardMainContainer:{
        height: 200,
        width: '100%',
        marginTop: 20,
        overflow: 'visible',
    },
    cardContainer: {
        width: '100%',
        height: 150,
        borderRadius: 20,
        shadowColor: '#888',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {width: 5, height: 7},
    },
    chargingStationName: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 9,
    },
    time: {
        backgroundColor: '#fff',
        width: 100,
        height: 40,
        top: 110,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: {width: 5, height: 7},
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default card;