import { Component } from 'react'
import { View } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import './index.scss'

export default class Index extends Component {

  render(): JSX.Element {
    return (
      <View className='index'>
        <NavBar navbarTitle='首页'></NavBar>
      </View>
    )
  }
}
