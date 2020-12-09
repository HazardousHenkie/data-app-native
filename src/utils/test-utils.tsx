import React from 'react'
import { render } from '@testing-library/react-native'

// import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { Provider as PaperProvider } from 'react-native-paper'

import { I18nextProvider } from 'react-i18next'

import { NavigationContainer } from '@react-navigation/native'
import i18n from './i18n'

import darkTheme from '../styles/themeStyles'
import variables from '../styles/variables'

// import configureStore from '../store/configureStore'

// TODO: add store back to test when there is a reducer

const customRender = (
    ui: React.ReactElement,
    {
        // initialState = {},
        // store = configureStore(initialState),
        ...renderOptions
    } = {}
) => {
    const Wrapper: React.FC = ({ children }) => {
        return (
            // <Provider store={store}>
            <NavigationContainer>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider theme={variables}>
                        <PaperProvider theme={darkTheme}>
                            {children}
                        </PaperProvider>
                    </ThemeProvider>
                </I18nextProvider>
            </NavigationContainer>
            // </Provider>
        )
    }

    return render(ui, {
        wrapper: Wrapper,
        ...renderOptions,
    })
}

export * from '@testing-library/react-native'

export { customRender as render }
