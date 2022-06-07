import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {headerStyles as styles} from '../../styles'
export default function Header({title}) {
  return (
    <View>
        <Text style={styles.title}>{title || "Header Title"}</Text>
    </View>
  )
}
