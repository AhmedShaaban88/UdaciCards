import React, {PureComponent} from 'react'
import { Text, TouchableOpacity, StyleSheet,Button } from 'react-native'
import {blue} from '../utils/colors'
class TextButton extends PureComponent {
  render() {
    const { children, onPress, style = {} } = this.props
    return (
      <Button onPress={onPress} style={{backgroundColor:blue}}>
        <Text style={style}>{children}</Text>
      </Button>
    )
  }
}

export default TextButton
