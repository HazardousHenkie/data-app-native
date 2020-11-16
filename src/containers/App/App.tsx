import React from 'react'

import styled from 'styled-components/native'

import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Provider as PaperProvider } from 'react-native-paper'
import Title from '../../components/title'

import useDarkMode from './useDarkMode'
import useTheme from './useTheme'
// import SideDrawer from '../../components/Organisms/SideDrawer'

const Container = styled(View)`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`

const App: React.FC = () => {
    // TODO: add setDarkMode
    const { darkMode } = useDarkMode()
    const { theme } = useTheme(darkMode)

    return (
        <PaperProvider theme={theme}>
            <Container>
                {/* <SideDrawer /> */}
                <Title>
                    <Text>test with Styled Components</Text>
                </Title>

                {/* // TODO: add styling to map style={{ width: '100%', height: '100%' }}  */}
                <MapView />
            </Container>
        </PaperProvider>
    )
}

export default App
