import React from 'react'

import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

const CustomDrawerContent = (
    props: DrawerContentComponentProps<DrawerContentOptions>
) => {
    return (
        <DrawerContentScrollView testID="CustomDrawerContent" {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
