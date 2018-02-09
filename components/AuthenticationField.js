import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class AuthenticationField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ this.props.fieldStyle, styles.inputWrapper ]}>
        <TextInput ref={ (ref) => { this.inputRef = ref } } style={[ this.props.inputStyle, styles.input ]}
          placeholder={ this.props.placeholder }
          keyboardType={ this.props.keyboardType }
          autoFocus={ this.props.autoFocus }
          secureTextEntry={ this.props.secureTextEntry }
          returnKeyType={ 'next' }
          onSubmitEditing={ this.props.next }
        />
        { this.props.hasNextButton &&
          <TouchableOpacity style={ styles.nextButton }
            activeOpacity={ .8 }
            onPress={ this.props.next }
          >
            <Ionicons
              name='ios-arrow-round-forward'
              size={ 40 }
              color='#4a90e2'
            />
          </TouchableOpacity>
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  inputWrapper : {
    marginRight : 15,
    marginLeft : 15,
    borderWidth : 1,
    borderColor : '#000',
    flexDirection : 'row',
    justifyContent : 'center'
  },
  input : {
    paddingTop : 16,
    paddingRight : 15,
    paddingBottom : 15,
    paddingLeft : 15,
    fontFamily : 'FuturaLTBook',
    fontSize : 16,
    flexGrow : 1
  },
  nextButton : {
    paddingTop : 6,
    paddingRight : 15
  }
})