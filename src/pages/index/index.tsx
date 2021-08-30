import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import './index.scss'

export default class Index extends Component {

  render(): JSX.Element {
    return (
      <View className='index-page'>
        <NavBar navbarTitle='首页'></NavBar>
        <View className='guide-box'>
          <Text>首页的功能描述：1.可以发起动态 2.可以分享、评论、点赞动态(参考《脉脉校友圈》小程序)</Text>
        </View>
      </View>
    )
  }
}
