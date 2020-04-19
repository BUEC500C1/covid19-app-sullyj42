import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/resultsShowScreen";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen
    },
    {
        initialRouteName: "Search",
        defaultNativationOptions: {
            title: "Business Search",
        },
    }
);

export default createAppContainer(navigator);
