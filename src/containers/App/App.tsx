import React from 'react'

import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import SideDrawer from '../../components/Organisms/SideDrawer'

import darkTheme from '../../styles/themeStyles'

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <PaperProvider theme={darkTheme}>
                <SideDrawer />
            </PaperProvider>
        </NavigationContainer>
    )
}

export default App
