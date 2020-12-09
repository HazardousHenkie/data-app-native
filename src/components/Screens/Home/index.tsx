import React from 'react'

import { Text, View } from 'react-native'
import MapViewStyled from './styledComponents'
import HamburgerIcon from '../../Molecules/HamburgerIcon'

const HomeScreen = () => {
    return (
        <View testID="HomeScreen">
            <Text>HomePage</Text>
            <HamburgerIcon />
            <MapViewStyled />
        </View>
    )
}

export default HomeScreen
