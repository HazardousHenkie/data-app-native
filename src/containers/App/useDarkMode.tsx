import { useState, useEffect } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(true)
    // TODO: should be set in native store
    //     localStorage.getItem('darkmode') === 'true'

    useEffect(() => {
        // TODO: should get from native store and change depending on preference
        // if (!localStorage.getItem('darkmode')) {
        setDarkMode(true)
        // }
    }, [setDarkMode])

    return { darkMode, setDarkMode }
}

export default useDarkMode
