import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppButton} from '../components/Button';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '600',
          textAlign: 'center',
          fontStyle: 'italic',
        }}>
        Create Everlasting Memories, One Click at a Time
      </Text>
      <Image
        source={require('../Assets/Images/memory.png')}
        style={{width: '  50%', height: '30%', alignSelf: 'center'}}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => ''} />
      <Text style={{color: 'black', textAlign: 'center', marginVertical: 20}}>
        Not Register
      </Text>
      <TouchableOpacity style={styles.ClickHerebtn}>
        <Text style={{color: 'black'}}>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  ClickHerebtn: {
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
