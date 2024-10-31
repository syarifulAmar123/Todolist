import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {iBackground} from '../../assets';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <ImageBackground
      source={iBackground}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#27a69a'} />
      <View>
        <Text
          style={{
            color: 'white',
            fontFamily: 'RubikDoodleShadow-Regular',
            fontSize: 70,
            marginTop: -70,
            elevation: 18,
          }}>
          TodoList
        </Text>
      </View>
    </ImageBackground>
  );
};
export default SplashScreen;
