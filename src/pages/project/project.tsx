import { Component } from "react"
import { View } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'

export default class Project extends Component {

    render(): JSX.Element {
        return (
            <View>
                <NavBar navbarTitle='项目'></NavBar>
                项目管理
            </View>
        )
    }
}