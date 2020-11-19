import { DefaultTheme } from 'react-native-paper'

const darkTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
}

// primary - primary color for your app, usually your brand color.
// accent - secondary color for your app which complements the primary color.
// background - background color for pages, such as lists.
// surface - background color for elements containing content, such as cards.
// text - text color for content.
// disabled - color for disabled elements.
// placeholder - color for placeholder text, such as input placeholder.
// backdrop - color for backdrops of various components such as modals.

// const lightTheme = responsiveFontSizes(
//     createMuiTheme({
//         palette: {
//             type: 'light',
//             common: {
//                 black: '#000',
//                 white: '#fff',
//             },
//             primary: {
//                 light: '#f0f0f0',
//                 main: '#fffafa',
//                 dark: '#6b6969',
//                 contrastText: 'grayscale(1)',
//             },
//         },
//         overrides: {
//             MuiDrawer: {
//                 paperAnchorBottom: {
//                     overflow: 'visible',
//                 },
//             },
//         },
//     })
// )

// export const darkTheme = responsiveFontSizes(
//     createMuiTheme({
//         palette: {
//             type: 'dark',
//             common: {
//                 black: '#fff',
//                 white: '#000',
//             },
//             primary: {
//                 light: '#424141',
//                 main: '#636363',
//                 dark: '#252525',
//                 contrastText: 'invert(1) grayscale(1)',
//             },
//         },
//         overrides: {
//             MuiDrawer: {
//                 paperAnchorBottom: {
//                     overflow: 'visible',
//                 },
//             },
//         },
//     })
// )

export default darkTheme
