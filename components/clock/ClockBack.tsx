import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'

const {height,width} = useWindowDimensions()

const ClockBack = () => {
  return (
    <View>
      <Text>ClockBack</Text>
    </View>
  )
}

export default ClockBack