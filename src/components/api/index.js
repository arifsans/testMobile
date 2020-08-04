import React, {Component} from 'react';
import {
    ScrollView, 
    FlatList, 
    ActivityIndicator,
    LogBox
} from 'react-native';
import Berita from '../Berita';

export default class ApiBerita extends Component {
    constructor() {
        super();
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        try {
            const url = 'http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=baf9c9652ce6464fa4acbdf2f8783b25';
            const response = await fetch(url);
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.articles
            }, function () {
                console.log(responseJson.status);
                console.log(responseJson.totalResults);
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        LogBox.ignoreLogs([
            'VirtualizedLists should never be nested', // TODO: Remove when fixed
          ])
        // handle loading
        if(this.state.isLoading) {
            return(
                <ScrollView>
                    <ActivityIndicator />
                </ScrollView>
            )
        }

        return(
            <ScrollView style={{flex: 1, padding: 20,alignContent: 'center'}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <Berita
                            image={item.urlToImage}
                            url={item.url}
                            description={item.description}
                            publishedAt={item.publishedAt}
                            name={item.source.name}
                            title={item.title} 
                            author={item.author} />
                    }
                    keyExtractor={({title}, _index) => title}
                />
            </ScrollView>
        );
    }
}