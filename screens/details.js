import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Details = ({navigation, route}) => {

    const handleGoback =  () => {
        navigation.navigate(`Quotes`);
    }

    return <View style={styles.container}>
        <Text style={styles.textAuthor}>Author: {route.params.author}</Text>
        <Button title='Go back to quotes' onPress={handleGoback} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    textAuthor: {
        color: "black",
        fontSize: 32,
        lineHeight: 40,
        textAlign: "center",
    }
})

export default Details;