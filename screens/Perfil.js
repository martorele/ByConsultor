import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle'

export default function Perfil({navigation}) {
  const [email, setEmail] = useState(null)
  const [passowrd, setPassword] = useState(null)

  const entrar = () => {
    alert('entrou')
  }

  return (
    <View style={styles.container}>
      <Text h2>Perfil</Text>
      <Input
        placeholder="e-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        keyboardType="email-address"
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        keyboardType="email-address"
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Enviar"
        onPress={() => entrar()}
      />

    </View>
  );
}