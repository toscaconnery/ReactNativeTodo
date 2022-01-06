import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import EmptyItemBanner from './components/EmptyItemBanner';
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Create a new branch'},
    {id: uuidv4(), text: 'Merge old branch'},
    {id: uuidv4(), text: 'Refactor the code'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text: text}, ...prevItems]
    })
  }

  return (
    <View style={styles.container}>
      <Header
        title={'To Do List'}
      />

      <AddItem addItem={addItem}/>

      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/> }
      />

      { items.length == 0 &&
        <EmptyItemBanner />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60,
  },
})

export default App;