import React from 'react';
import Background from '../components/Background';
import Button from '../components/Button';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        GİRİŞ YAP
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}>
        KAYIT OL
      </Button>
    </Background>
  );
}
