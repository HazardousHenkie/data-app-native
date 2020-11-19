import React, { useEffect } from 'react'

import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import SideDrawer from '../../components/Organisms/SideDrawer'

import darkTheme from '../../styles/themeStyles'

const App: React.FC = () => {
    const { t, i18n } = useTranslation('app')

    useEffect(() => {
        console.log('here?2')
        i18n.changeLanguage('en')
    }, [i18n])

    return (
        <NavigationContainer>
            <PaperProvider theme={darkTheme}>
                <Text>{t('descriptionTitle')}</Text>
                <SideDrawer />
            </PaperProvider>
        </NavigationContainer>
    )
}

export default App
