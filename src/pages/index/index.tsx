import { Component } from 'react'
import { View } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render(): JSX.Element {
    return (
      <View className='index'>
        <NavBar></NavBar>
        {/* <Text>Hello world!</Text> */}
      </View>
    )
  }
}
