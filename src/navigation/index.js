
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from '../screens/HomeScreens';
import Restorenitean from "../screens/RestaurantDetail";
import DetailDish from "../screens/DetailDish"
const stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="HomeScreens" component={HomeScreens} />
      <stack.Screen name="Restorenitean"
       component={Restorenitean}
       options={{headerShown:false}} />
       <stack.Screen name="DetailDish"
       component={DetailDish}
       options={{headerShown:false}} />
      
    </stack.Navigator>
  );
}

export default RootNavigator;