import React, { Component, useState } from 'react'

import {StyleSheet, ScrollView, View, Text, Button} from 'react-native'
import {TouchableOpacity, ImageBackground, Image, Alert} from 'react-native'

import { SafeAreaView } from 'react-native';

import Card from '../Components/card'
import teslaChargerImage from '../assets/charginStationTesla.jpeg'
import morrisChargerImage from '../assets/chargingStationMorris.jpeg'
import tataChargerImage from '../assets/chargingStationTata.jpeg'
import mahindraChargerStation from '../assets/chargingStationMahindra.jpeg'

function Home({navigation}){

    const [cardsToMap, setCardsToMap] = useState([]);
    
    function showTesla(){
        setCardsToMap([
            {
                id: 'TS1',
                time: '25-30 Mins',
                stationName: 'Tesla Charging Station 103',
                image: teslaChargerImage,
            }, 
            {
                id: 'TS2',
                time: '20-25 Mins',
                stationName: 'Tesla Charging Station 102',
                image: teslaChargerImage,
            }, 
            {
                id: 'TS3',
                time: '15-20 Mins',
                stationName: 'Tesla Charging Station 101',
                image: teslaChargerImage,
            }
        ])
        {navigation.navigate("IndividualPage")}
    }   

    function showMahindra(){
        setCardsToMap([]);
        setCardsToMap([ 
            {
                id: 'MH1',
                time: '25-30 Mins',
                stationName: 'Mahindra Charge Point 543',
                image: mahindraChargerStation,
            }, 
            {
                id: 'MH2',
                time: '20-25 Mins',
                stationName: 'Mahindra Charge Point 541',
                image: mahindraChargerStation,
            }, 
            {
                id: 'MH3',
                time: '15-20 Mins',
                stationName: 'Mahindra Charge Point 538',
                image: mahindraChargerStation,
            }
        ])
    }

    function showTata(){
        setCardsToMap(cardsToMap => []);
        setCardsToMap([ 
            {
                id: 1,
                time: '25-30 Mins',
                stationName: 'Tata Power A-4',
                image: tataChargerImage,
            }, 
            {
                id: 2,
                time: '15-20 Mins',
                stationName: 'Tata Power B-3',
                image: tataChargerImage,
            }
        ]);
    }

    function showMorris(){
        setCardsToMap(cardsToMap => []);
        setCardsToMap([
            {
                id: 1,
                time: '25-30 Mins',
                stationName: 'MG Chargers Point 4',
                image: morrisChargerImage,
            }, 
            {
                id: 2,
                time: '20-25 Mins',
                stationName: 'MG Chargers Point 13',
                image: morrisChargerImage,
            }, 
            {
                id: 3,
                time: '15-20 Mins',
                stationName: 'MG Chargers Point 6',
                image: morrisChargerImage,
            }
        ]);
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Charging Stations</Text>
                </View>

                <View style={styles.textHeading}>
                    <Text style={styles.textHeadingText}>Choose your {'\n'}<Text style={styles.span}>Manufacturer</Text></Text>
                </View>

                <View style={companyStyles.companies}>
                    <TouchableOpacity style={companyStyles.companyCard} onPress={showTesla}>
                            <View style={companyStyles.circle}></View>
                            <Text style={companyStyles.textName}>Tesla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={companyStyles.companyCard} onPress={showMahindra}>
                        <View style={companyStyles.circle}></View>
                        <Text style={companyStyles.textName}>Mahindra</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={companyStyles.companyCard} onPress={showTata}>
                        <View style={companyStyles.circle}></View>
                        <Text style={companyStyles.textName}>Tata</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={companyStyles.companyCard} onPress={showMorris} >
                        <View style={companyStyles.circle}></View>
                        <Text style={companyStyles.textName}>Morris Garages</Text>
                    </TouchableOpacity>
                </View>

                {
                    cardsToMap.map((entry)=>
                        <Card key={entry.id} 
                            proTime={entry.time} 
                            proImage={entry.image} 
                            proName={entry.stationName}
                            onPress={() => navigation.navigate("IndividualPage")}
                        />
                    )
                }
            </ScrollView>
        </View>
    )
}

const companyStyles = StyleSheet.create({
    companies: {
        height: 135,
        width: '100%',
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    circle: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginHorizontal: 'auto',
    },
    textName: {
        color: '#fff',
        fontWeight: '500',
        textAlign:'center',
        marginBottom: 10,
    },
    companyCard: {
        width: 77,
        height: 130,
        borderRadius: 60,
        backgroundColor: '#EE6706',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    option: {
        height: 200,
        width: 100,
        backgroundColor: 'red',
    },
    header: {
        height: 40,
        width: '90%',
        backgroundColor: '#EE6706',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textHeading: {
        marginTop: 30,
        marginLeft: '2%',
    },
    textHeadingText: {
        fontSize: 30,
        fontWeight: '100',
    },
    span: {
        fontSize: 40,
        fontWeight: '300',
    },
})
export default Home