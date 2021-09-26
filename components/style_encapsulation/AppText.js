import React from 'react'
import { Text} from 'react-native';

import defaultStyle from '../../app/config/defaultStyle';

export default function AppText({ text, style, children, ...otherProps }) {
    return (
       <Text style={[text, style]} {...otherProps} >{children}</Text>
    )
}

