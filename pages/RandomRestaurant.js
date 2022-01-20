import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const RandomRestaurant = () => {

    const [restaurant, setRestaurant] = useState(null)
    const [hours, setHours] = useState({})

    useEffect(() => {
        let url = 'https://random-data-api.com/api/restaurant/random_restaurant'
        axios.get(url)
            .then(data => {
                setHours(data.data.hours)
                setRestaurant(data.data)
            })
    }, [])

    function renderScheduleItem(day, schedule, index) {
        return (
            <View style={styles.schedulesContainer}>
                <Text style={styles.daysName}>{daysName(day)}</Text>
                <Text>{schedule.opens_at} - {schedule.closes_at}</Text>
                {
                    schedule.is_closed == false &&
                    <Text style={styles.storeIsOpen}>OPEN</Text>
                }
                {
                    schedule.is_closed == true &&
                    <Text style={styles.storeIsClosed}>CLOSED</Text>
                }
            </View>
        )
    }

    function daysName(name) {
        return name.toUpperCase()
    }

    return (
        <View style={styles.container}>
            { restaurant &&
                <FlatList
                    ListHeaderComponent={
                        <>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.contentContainer}>
                                    <Text style={styles.name}>{restaurant.name}</Text>
                                    <Text>{restaurant.address}</Text>
                                </View>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo} source={{uri:restaurant.logo}} />
                                </View>
                            </View>

                            <View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardText}>{restaurant.description}</Text>
                                </View>
                            </View>

                            <View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardTitle}>Review</Text>
                                    <Text style={styles.cardText}>{restaurant.review}</Text>
                                </View>
                            </View>
                            
                        </>
                    }
                    data={Object.keys(hours)}
                    renderItem={({ item, index }) => 
                        renderScheduleItem(item, hours[item], index)
                    }
                    keyExtractor={(item) => item.toString()}
                >

                </FlatList>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
    },
    logo: {
        height:84,
        width:84,
    },
    name: {
        fontSize:24,
        fontWeight:'800',
    },
    contentContainer: {
        flex:8,
        backgroundColor:'#dedede',
        padding:10,
        borderRadius:10,
    },
    logoContainer: {
        flex:3,
        alignItems:'flex-end',
    },
    cardContainer: {
        marginTop:10,
        backgroundColor:'#dedede',
        padding:10,
        borderRadius:10,
    },
    cardTitle: {
        fontStyle:'italic',
        color:'#2e2e2e',
        fontWeight:'bold'
    },
    cardText: {
        textAlign:'justify',
    },
    schedulesContainer: {
        marginTop:10,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        borderWidth:3,
        borderColor:'#fcc201',
    },
    daysName: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fcc201',
    },
    storeIsOpen: {
        color:'#8FFC01',
        fontSize:25,
        fontWeight:'bold',
        position:'absolute',
        right:0,
        marginRight:10,
        marginTop:15,
        transform: [{ rotate: '6deg' }],
    },
    storeIsClosed: {
        color:'#FC1B01',
        fontSize:25,
        fontWeight:'bold',
        position:'absolute',
        right:0,
        marginRight:10,
        marginTop:15,
        transform: [{ rotate: '6deg' }],
    },
    temp: {
        color:'black',
        backgroundColor:'orange',
        marginTop:10,
        padding:10,
    }
})

export default RandomRestaurant;