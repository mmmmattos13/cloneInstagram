import { createStackNavigator } from "@react-navigation/stack";
import { Feed } from "../screens/Feed";

import { Header } from "../components/Header";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='Feed'
                component={Feed}
                options={{                    
                    headerTitle: () => <Header />,
                    headerStyle: {
                        backgroundColor: '#f5f5f5'
                    },
                }}
            />
        </Navigator>
    )
}