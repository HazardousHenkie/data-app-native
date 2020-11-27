import React from 'react'

import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import LanguageSwitcher from '../../Molecules/LanguageSwitcher'

const CustomDrawerContent = (
    props: DrawerContentComponentProps<DrawerContentOptions>
) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <LanguageSwitcher />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
