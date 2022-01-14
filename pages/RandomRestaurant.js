import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const RandomRestaurant = () => {

    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        fetch('https://random-data-api.com/api/restaurant/random_restaurant')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRestaurant(data)
            })
    }, [])

    return (
        <View style={styles.container}>
            { restaurant &&
                <View>

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

                    <View>
                        {/* <FlatList /> */}
                    </View>

                </View>

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
})

export default RandomRestaurant;