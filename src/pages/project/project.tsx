import { Component } from "react"
import { View, Text } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import './project.scss'

interface IState {
    projectList: any[]
}

export default class Project extends Component<{}, IState> {

    constructor(props) {
        super(props)
        this.state = {
            projectList: [
                { id: 0, name: '前端实现跨域', progress: 0, frame: 'vue', desc: '补充描述', createDate: '2021-08-30' },
                { id: 1, name: '前端实现CDN静态资源加载', progress: 0, frame: 'vue', desc: '补充描述', createDate: '2021-08-30' },
                { id: 2, name: '前端实现图片懒加载', progress: 0, frame: 'vue', desc: '补充描述', createDate: '2021-08-30' },
                { id: 3, name: '前端从零构建项目', progress: 0, frame: 'vue', desc: '补充描述', createDate: '2021-08-30' }
            ]
        }
    }

    render(): JSX.Element {
        const { projectList } = this.state
        return (
            <View className='project-page'>
                <NavBar navbarTitle='项目'></NavBar>
                <View className='header'>
                    <Text className='title'>Adal Miniprogramer</Text>
                    <Text className='desc'>项目列表</Text>
                </View>
                <View className='project-list'>
                    {projectList.map((item) => (
                        <View key={item.key} className='project-item'>
                            <View>name:{item.name}</View>
                            <View>progress:{item.progress}%</View>
                            <View>frame:{item.frame}</View>
                            <View>desc:{item.desc}</View>
                            <View>createDate:{item.createDate}</View>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}