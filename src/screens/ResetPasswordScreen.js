import React, {useState} from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import {emailValidator} from '../helpers/emailValidator';

export default function ResetPasswordScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <TextInput
        label="E-posta"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Şifre sıfırlama bağlantısı içeren bir e-posta alacaksınız."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{marginTop: 16}}>
        ŞİFREMİ SIFIRLA
      </Button>
    </Background>
  );
}
