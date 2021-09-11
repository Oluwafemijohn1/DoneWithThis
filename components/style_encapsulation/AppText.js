import React from 'react'
import { Text} from 'react-native';

import defaultStyle from '../../app/config/defaultStyle';

export default function AppText(props) {
    return (
       <Text style={[defaultStyle.text, props.style]} >{props.children}</Text>
    )
}

