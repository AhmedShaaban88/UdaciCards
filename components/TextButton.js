import React, {PureComponent} from 'react'
import { Text, TouchableOpacity, StyleSheet,Button } from 'react-native'
import {blue} from '../utils/colors'
class TextButton extends PureComponent {
  render() {
    const { children,title, onPress, style = {} } = this.props
    return (
      <Button onPress={onPress} style={{backgroundColor:blue}} title={title}>
        <Text style={style}>{children}</Text>
      </Button>
    )
  }
}

export default TextButton
