import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.touch}>
            <View style={styles.view}>
                <Text>{item.text}</Text>
                <Icon 
                    name='times'
                    size={20}
                    color={'firebrick'}
                    onPress={() => deleteItem(item.id)}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touch: {
        margin:5,
    },
    view: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#fcc201',
        backgroundColor:'white',
        padding:10,
        borderWidth:3,
        borderRadius:7,
    },
    text: {
        color:'darkslateblue',
        fontSize:20,
        marginBottom:20,
    }
})

export default ListItem;