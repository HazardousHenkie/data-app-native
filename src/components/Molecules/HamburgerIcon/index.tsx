import React from 'react'

import { DrawerActions, useNavigation } from '@react-navigation/native'

import { IconButtonStyled } from './styledComponents'

const HamburgerIcon = () => {
    const { dispatch } = useNavigation()

    const openDrawer = () => {
        dispatch(DrawerActions.openDrawer())
    }

    return (
        <IconButtonStyled
            icon="menu"
            testID="IconButtonStyled"
            aria-label="open drawer"
            onPress={() => openDrawer()}
        />
    )
}

export default HamburgerIcon
