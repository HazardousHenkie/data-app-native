import React from 'react'

import { Provider } from 'react-redux'

import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import DrawerNavigation from '../../components/Organisms/DrawerNavigation'

import darkTheme from '../../styles/themeStyles'
import variables from '../../styles/variables'
import configureStore from '../../store/configureStore'

const App: React.FC = () => {
    const { t } = useTranslation('app')

    const initialState = {}
    const store = configureStore(initialState)

    return (
        <React.StrictMode>
            <Provider store={store}>
                <NavigationContainer>
                    <ThemeProvider theme={variables}>
                        <PaperProvider theme={darkTheme}>
                            <View>
                                <Text>{t('app:descriptionTitle', 'test')}</Text>
                            </View>
                            <DrawerNavigation />
                        </PaperProvider>
                    </ThemeProvider>
                </NavigationContainer>
            </Provider>
        </React.StrictMode>
    )
}

export default App
