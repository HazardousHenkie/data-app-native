import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import Title from '../../components/title'

const Container = styled(View)`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`

const App: React.FC = () => {
    return (
        <Container>
            <Title>
                <Text>Expo with Styled Components</Text>
            </Title>

            <MapView
            //  style={{ width: '100%', height: '100%' }}
            />
        </Container>
    )
}

export default App
