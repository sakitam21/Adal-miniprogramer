import { Component } from "react"
import NavBar from '../../components/NavBar/NavBar'
import { View } from '@tarojs/components'
import './project_detail.scss'

export default class ProjectDetail extends Component {

    render():JSX.Element {
        return (
            <View>
                <NavBar navbarTitle='项目详情页' arrow={true}></NavBar>
                项目详情页
            </View>
        )
    }
}