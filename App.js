import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'open-sans': require('../Game/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../Game/assets/fonts/OpenSans-Bold.ttf'),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber}/>
  }

  function gameOverHandler() {
    setGameOver(true)
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: .15
  }
});
