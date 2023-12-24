
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from '../screens/HomeScreens';
import Restorenitean from "../components/Restoreniteam";
const stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreens} />
      <stack.Screen name="restorenitean" component={Restorenitean} />
      
    </stack.Navigator>
  );
}

export default RootNavigator;