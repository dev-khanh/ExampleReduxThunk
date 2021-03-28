import React, { useEffect, useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { useComponentWillMount } from 'components/hooks'

export default () => {
  const getColor = useSelector((state) => state.Demo.colorsGolbal)
  useMemo(() => {
    // before render
    // console.log('componentWillMount events')
  }, [])
  useEffect(() => {
    // after render
    // console.log('componentDidMount events')
  }, [])
  useComponentWillMount(() => {
    // console.log('DEVK  useComponentWillMount')
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {console.log('DEVK RENDER')}
      <Text style={{ color: getColor.primary }}>XXX</Text>
    </View>
  )
}
