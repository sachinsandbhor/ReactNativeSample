import { AppRegistry, View } from 'react-native';
import React from 'react';
//import App from './App';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//AppRegistry.registerComponent('albums', () => App);
AppRegistry.registerComponent('albums', () => AppItem);

const AppItem = () => (
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);
