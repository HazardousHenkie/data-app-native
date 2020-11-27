import styled from 'styled-components'

import { IconButton } from 'react-native-paper'
import MapView from 'react-native-maps'

const MapViewStyled = styled(MapView)`
    width: 100%;
    height: 100%;
`

export const IconButtonStyled = styled(IconButton)`
    padding-left: 18px;
    margin-top: 40px;
`

export default MapViewStyled
