import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Canvas, Fill } from '@shopify/react-native-skia'


const ClockBack = () => {

  const {height,width} = useWindowDimensions()

  return (
    <Canvas>
      <Fill color="red" />
    </Canvas>
  )
}

export default ClockBack