import 'react-native-gesture-handler';
import UserProvider from './src/context/UserContext';
import Rotas from './src/Rotas';
 export default function App(){
  return(
    <UserProvider>
      <Rotas/>
    </UserProvider>
  )
 }