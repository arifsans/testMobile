import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
 
const BannerWidth = Dimensions.get('window').width;
 
const images = [
    "https://mmc.tirto.id/image/2017/04/24/jamucopycopy.JPG",
    "https://mmc.tirto.id/image/otf/1024x535/2017/09/14/obat-obatan--iStock_ratio-16x9.jpg",
    "https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/25243/w-744/manfaat_jogging_3.jpg"
];
 
export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index} style={{width: 345,height: 138, paddingHorizontal: 15}}>
                <Image style={{ width: 345, height: 138 }} source={{ uri: image }} />
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});