import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    const goToToDo = () => {
        navigation.navigate('ToDo')
    }

    const goToAbout = () => {
        navigation.navigate('About')
    }

    const goToRandomRestaurant = () => {
        navigation.navigate('RandomRestaurant')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navButton} onPress={goToToDo}>
                <Text style={styles.navButtonText}>To Do</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={goToRandomRestaurant}>
                <Text style={styles.navButtonText}>Random Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={goToAbout}>
                <Text style={styles.navButtonText}>About</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      margin:10,
    },
    navButton: {
        marginBottom:5,
        backgroundColor:'#eeb609',
        padding:10,
    },
    navButtonText: {
        color:'white',
        fontWeight:'700',
        fontSize:17,
    },
  })

export default Home;