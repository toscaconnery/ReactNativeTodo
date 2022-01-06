import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EmptyItemBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}><Icon name='exclamation-triangle' size={18}/> No item in the list. Let's add things here.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#dba514',
        padding:15,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
    },
    text: {
        fontSize:18,
        alignItems:'center',
        textAlign:'center',
        fontWeight:'bold',
    }
})

export default EmptyItemBanner;