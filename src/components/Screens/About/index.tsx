import React from 'react'

import { Text, View } from 'react-native'
import HamburgerIcon from '../../Molecules/HamburgerIcon'

const AboutScreen = () => {
    return (
        <View testID="AboutScreen">
            <HamburgerIcon />
            <Text>about</Text>
        </View>
    )
}

export default AboutScreen
