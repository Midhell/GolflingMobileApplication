import React from 'react';
import { useFonts } from 'expo-font'
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Sentient: require('./assets/fonts/Sentient-Regular.otf'),
    SentientBold: require('./assets/fonts/Sentient-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <LinearGradient
      colors={['#68a172ff', '#19251bff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>GOLF<Text style={{color: "darkorange"}}>LING</Text></Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 54,
    fontWeight: '600',
    fontFamily: 'SentientBold',
    marginBottom: 120,
  },
});
