import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() =>
              navigation.navigate('TrackDetail', { _id: item._id })
            }>

              <Text>{item.name}</Text>

            </TouchableOpacity>
          );
        }}
      />
    </>
  )
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({});
export default TrackListScreen;  