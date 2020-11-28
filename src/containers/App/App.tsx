import React from 'react'

import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import SideDrawer from '../../components/Organisms/SideDrawer'

import darkTheme from '../../styles/themeStyles'

const App: React.FC = () => {
    const { t } = useTranslation('app')

    return (
        <NavigationContainer>
            <PaperProvider theme={darkTheme}>
                <View>
                    <Text>{t('app:descriptionTitle', 'test')}</Text>
                </View>
                <SideDrawer />
            </PaperProvider>
        </NavigationContainer>
    )
}

export default App
