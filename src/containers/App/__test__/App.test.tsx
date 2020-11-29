// import React from 'react'

// import { render } from 'utils/test-utils'

// import { getFavoritedCountries } from 'globals/favoritedCountriesList/actions'
// import { getRefreshTokenRequest } from 'globals/authentication/refreshToken/actions'

// import configureStore from 'store/configureStore'

// import mockFetch, { mockFetchCleanUp } from 'utils/request-test-utils'

// import App from '../App'
// import { mockFetchCleanUp } from '../../../utils/request-test-utils'

describe('<App />', () => {
    // afterEach(() => {
    //     mockFetchCleanUp()
    // })

    it('should dispatch getRefreshTokenRequest when localStorage.getItem is set', () => {
        //     const store = configureStore({ authenticationData: { loggedIn: true } })
        //     const userId = '12'
        //     store.dispatch = jest.fn()
        //     localStorage.setItem('userId', userId)
        //     render(<App />, { store })
        //     expect(store.dispatch).toHaveBeenCalledWith(
        //         getRefreshTokenRequest(userId)
        //     )
    })

    // it('should dispatch getFavoritedCountries when loggedIn', () => {
    //     const store = configureStore({ authenticationData: { loggedIn: true } })

    //     store.dispatch = jest.fn()

    //     render(<App />, {
    //         store,
    //     })

    //     expect(store.dispatch).toHaveBeenCalledWith(getFavoritedCountries())
    // })

    // it('should load ErrorSnackbars', () => {
    //     const { getByTestId } = render(<App />)

    //     const ErrorSnackbars = getByTestId('ErrorsSnackbarComponent')

    //     expect(ErrorSnackbars).toBeInTheDocument()
    // })
})
