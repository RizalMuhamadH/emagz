/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    Image
} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});



export default class Home extends Component {
    state = {
        data: []
    };
    componentWillMount(){
        this.handlePress();
    }
    handlePress = async() =>{
        let param = new FormData();
        param.append('edition_id', '0');
        await fetch('',{
            method: 'POST',
            body: param
        })
        .then((res) => res.json())
        .then((response) => {
            this.setState({
                data: response.data
            });
            // Alert.alert(this.state.data);
            console.warn(response.data);
        })
        .catch((error) =>{
            console.error(error);
        });
    };

    renderPager
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, paddingBottom: 5, paddingLeft: 2, paddingTop: 2, paddingRight: 2}}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                            />
                        </View>
                    }
                />
                {/* <Text> Some other text </Text>
                <Text> Some other text </Text>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text style={{ paddingTop: 50, color: '#FF0000' }}> Click me to see the name </Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        elevation: 4,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    toolbar: {
        color: '#488aff',
        height: 50,
    }
});

