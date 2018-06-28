import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetails = ({ album }) => {
const { title, 
        artist, 
        thumbnail_image,
        image,
        url } = album;
const { thumbnailStyle, 
        headerContainerImageStyle,
        headerContainerTextStyle,
        headerTextStyle,
        albumImageStyle } = styles;

    return (
        <Card>
            <CardItem>
                <View styles={headerContainerImageStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }}
                    />
                </View>   

              <View styles={headerContainerTextStyle}>
                <Text style={headerTextStyle}> {title}</Text>
                <Text> {artist}</Text>
              </View>
            </CardItem>

            <CardItem>
                <Image source={{ uri: image }} style={albumImageStyle} />
            </CardItem>   

            <CardItem>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy now
                </Button>
            </CardItem> 
        </Card>
    );
};


const styles = {
        headerContainerImageStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
        },

        thumbnailStyle: {
            height: 50,
            width: 50,
        },

        headerContainerTextStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around',
        },

        headerTextStyle: {
            fontSize: 18,
        },

        albumImageStyle: {
            height: 300,
            width: null,
            flex: 1,
        }

};

export default AlbumDetails;