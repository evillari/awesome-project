import React, {useState, useEffect, useCallback, useRef} from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import axios from 'axios';

const API_URL = "https://zenquotes.io/api/random";
const INTERVAL = 15000;

const Quotes = ({navigation}) => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const handleShowDetails = () => {
        navigation.navigate("Details", {author});
    }

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true 
      }).start();
    };
  
    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true 
      }).start(({finished}) => {
            fetchRandomQuote();
      });
    };

    const handleFetchQuote = useCallback(async () => {
        try {
            setTimeout(function run() {
            fadeOut();
            setTimeout(run, INTERVAL);
          }, INTERVAL);
        } catch (error) {
          console.log(error);
        }
      }, []);
    
    const fetchRandomQuote = async () => {
        console.log('fetching quote');
        try {
            const data = await axios.get(API_URL);
            fadeIn();
            setQuote(data.data[0].q);
            setAuthor(data.data[0].a);
            console.log(data.data[0].q)
        } catch(e) {
            console.log(e);
        }   
    }

    useEffect(() => {
        handleFetchQuote();
    }, []);

    useEffect(() => {
        fetchRandomQuote();
    }, [])

    return <SafeAreaView style={styles.container}>
       <Animated.View style={{opacity: fadeAnim}}><Text onPress={handleShowDetails} style={styles.quote}> {`${quote}`}</Text></Animated.View> 
    </SafeAreaView>
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
    quote: {
        color: "black",
        fontSize: 32,
        lineHeight: 40,
        textAlign: "center",
        fontStyle: 'italic'
    }
})

export default Quotes;

