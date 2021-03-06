import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Touchable from './Touchable'

class ComposeBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ this.props.style, { position : 'absolute' }, styles.container ]}>
        <TextInput style={ styles.input }
          multiline={ true }
          placeholder={ this.props.activeTab == 0 ? 'compose message' : 'post somethin\'' }
          onFocus={ this.props.onCompositionInputFocus }
          onChange={ this.props.onCompositionInputChange }
          onBlur={ this.props.onCompositionInputBlur }
        />
        <Touchable style={ styles.button }
          onPress={ () => { console.log('sent or submitted') } }
        >
          <Text style={ styles.buttonText }>
            { this.props.activeTab == 0 ? 'send' : 'post' }
          </Text>
        </Touchable>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#eeeeee',
    justifyContent : 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    flexDirection: 'row'
  },
  input : {
    flexGrow : 1,
    paddingTop : 14,
    paddingRight : 14,
    paddingBottom : 9,
    paddingLeft : 14,
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 18
  },
  button : {
    paddingTop : 14,
    paddingRight : 14,
    paddingBottom : 9,
    paddingLeft : 14
  },
  buttonText : {
    fontSize : 18,
    color : '#4a90e2',
    fontFamily : 'HelveticaNeueRegular',
  }
})

export default ComposeBar
