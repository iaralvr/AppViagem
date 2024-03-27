import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext';

export default function Login() {


  const {Login} = useContext( UserContext );

  function realizaLogin()
  {
    Login( "favarogyuliana@gmail.com", "1234" );
  }
  
    return (
    <View onPress={realizaLogin}>
      <Text>Login</Text>
      <Button onPress={realizaLogin} title='Login'></Button>
    </View>
  )
}
