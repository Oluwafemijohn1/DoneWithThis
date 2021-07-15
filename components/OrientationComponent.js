import React from 'react'
import {
    useDeviceOrientation,
    useDimensions,
  } from "@react-native-community/hooks";

import { View } from 'react-native';

function OrientationComponent() {
    const {portrait, landscape} = useDeviceOrientation()
    return (
        <View style={{
            backgroundColor: "cyan",
            width: portrait ? "100%" : "50%" ,
            height: landscape ? "100%" :  "30%"
          }}></View>
    )
}




export default OrientationComponent
