import React, { Component } from 'react'
import { StyleSheet, Image , View} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Header } from 'react-navigation'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Button from './Button'

export class LeftButton extends Component {
  render() {
    return (
      <Button style={ styles.leftButton }
        onPress={ () => {
          this.props.onPress()
        }}
      >
        <Ionicons
          name='ios-arrow-round-back'
          size={ 40 }
        />
      </Button>
    )
  }
}

export class SearchHeader extends Component {
  render() {
    return (
      <Button style={ styles.searchHeaderContainer }
        onPress={ this.props.onPress }
      >
        <Image style={ styles.searchIcon }
          resizeMode='contain'
          source={ require('../assets/images/search.png') }
        />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  leftButton : {
    marginLeft : 15
  },
  searchHeaderContainer : {
    borderColor : '#cccccc',
    borderBottomWidth : 1,
    backgroundColor : '#eeeeee',
    flexDirection : 'column',
    justifyContent : 'flex-end',
    alignItems : 'center',
    ...ifIphoneX({
      height : 89
    }, {
      height : 65
    })
  },
  searchIcon : {
    width : 20,
    height : 20,
    marginBottom : 10
  }
})
