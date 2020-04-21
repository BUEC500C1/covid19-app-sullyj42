import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/resultsShowScreen";
import MapScreen from "./src/screens/mapScreen";

import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
    {

        Search: SearchScreen,
        ResultsShow: ResultsShowScreen,
        Home: HomeScreen,
        Map: MapScreen,
    },
    {
        initialRouteName: "Home",
        defaultNativationOptions: {
            title: "Business Search",
        },
    }
);

export default createAppContainer(navigator);
