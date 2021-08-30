import { Component } from 'react'
import { View } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'

export default class Blog extends Component {

    render(): JSX.Element {
        return (
            <View>
                <NavBar navbarTitle='博客'></NavBar>
                博客管理
            </View>
        )
    }
}