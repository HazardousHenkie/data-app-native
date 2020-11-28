import React from 'react'

import { View } from 'react-native'
import MapViewStyled from './styledComponents'
import HamburgerIcon from '../../Molecules/HamburgerIcon'

const HomeScreen = () => {
    return (
        <View>
            <HamburgerIcon />
            <MapViewStyled />
        </View>
    )
}

export default HomeScreen