import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import RNPickerSelect from 'react-native-picker-select'

import LanguageSwitcherWrapper from './styledComponents'
import { appLocales } from '../../../utils/i18n'

const LanguageSwitcher: React.FC = () => {
    const [loadingLanguage, setloadingLanguage] = useState(false)
    const { i18n } = useTranslation()
    const dropdownItems = appLocales.map((value) => ({ value, label: value }))

    const onLocaleToggle = (itemValue: string) => {
        setloadingLanguage(true)
        i18n.changeLanguage(itemValue as string)
    }

    useEffect(() => {
        setloadingLanguage(false)
    }, [i18n.language])

    return (
        <>
            <LanguageSwitcherWrapper data-testid="languageSwitcher">
                <RNPickerSelect
                    placeholder={{}}
                    value={i18n.language}
                    onValueChange={onLocaleToggle}
                    disabled={loadingLanguage}
                    items={dropdownItems}
                />
            </LanguageSwitcherWrapper>
        </>
    )
}

export default LanguageSwitcher
