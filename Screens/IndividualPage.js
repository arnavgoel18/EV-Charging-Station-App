import React, { Component } from 'react'

import { Alert } from 'react-native'
import {StyleSheet ,View, Button, Text, TouchableOpacity, ImageBackground} from 'react-native'
import teslaChargerImage from '../assets/charginStationTesla.jpeg'

import locationIcon from '../assets/locationIcon.png'

function IndividualPage(){

    //Alert for reserving a spot
    const showAlert = () =>{
        Alert.alert("Your Slot Has Been Reserved for 30 Mins");
    }

    return(
        <View style={indiPageStyle.example}>
            <View style={indiPageStyle.header}>
                <View style={indiPageStyle.stationName}>
                    <Text>Tesla Charging Point 103</Text>
                </View>     
            </View>

            <View style={indiPageStyle.circularPictureContainer}>
                <View style={indiPageStyle.circularPicture}>
                    <ImageBackground source={teslaChargerImage} 
                    style={{width: '100%',height: '100%', 
                    borderRadius: 200, overflow: 'hidden'}}>

                    </ImageBackground>
                </View>
                <View style={indiPageStyle.infoContainer}>
                    <Text style={{fontSize: 19,}}>
                        <Text style={indiPageStyle.boldText}>Chargers Currently Available:</Text> 
                    </Text>
                    <Text style={{fontSize: 19,}}>
                        <Text style={indiPageStyle.boldText}>Time to Destination:</Text> 
                        25 Mins
                    </Text>
                </View>
            </View>

            <View style={indiPageStyle.bottomInfo}>
                <View style={indiPageStyle.addressBar}>
                    <View style={indiPageStyle.locationIcon}>
                        <ImageBackground source={locationIcon} 
                        style={{width: '100%', height: '100%'}}>

                        </ImageBackground>
                    </View>
                    <Text style={indiPageStyle.addressText}>
                        Tesla CS 103, NH 48, New Delhi - 122022
                    </Text>
                </View>
                <View style={indiPageStyle.reserveSpotContainer}>
                    <TouchableOpacity style={indiPageStyle.reserveSpot} onPress={showAlert}>
                        <Text style={{fontSize: 20,}}>Reserve A Spot</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const indiPageStyle = StyleSheet.create({
    example: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    mainContainer: {
        flex: 1,
        paddingTop: 35,
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        height: 40,
        width: 100,
    },
    stationName: {
        height: 33,
        width: 200,
        backgroundColor: '#eee',
        borderRadius: 20,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularPictureContainer: {
        width: '100%',
        height: 480,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    circularPicture: {
        width: 250,
        height: 250, 
        borderRadius: 150,
        borderWidth: 1,
    },
    infoContainer: {
        width: '80%',
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
    //BOTTOM PART
    bottomInfo: {
        width: '100%',
        height: 250,
        backgroundColor: '#eee',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },  
    addressBar: {
        width: '100%',
        height: 90, 
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#888',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressText: {
        fontSize: 18,
        width: '60%',
        textAlign: 'center',
    },
    locationIcon: {
        width: 30,
        height: 40,
    },
    //RESERVE SPOT
    reserveSpotContainer: {
        width: '100%',
        height: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    reserveSpot: {
        width: '70%',
        height: 40,
        backgroundColor: '#EE6706',
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default IndividualPage;