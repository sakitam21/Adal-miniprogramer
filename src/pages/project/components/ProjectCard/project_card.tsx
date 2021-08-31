import { Component } from "react"
import { View } from '@tarojs/components'
import './project_card.scss'

interface IProps {
    projectItem: {
        id: number
        name: string
        progress: number
        frame: string
        author: string
        desc: string
        createDate: string
    }
}

export default class ProjectCard extends Component<IProps, {}>{

    constructor(props) {
        super(props)
    }

    render(): JSX.Element {
        const { projectItem } = this.props
        return (
            <View className='project-card'>
                <View className='side'>
                    <View className='id-num'>{projectItem.id + 1}</View>
                    <View className='progress-num'>{projectItem.progress}%</View>
                </View>
                <View className='body'>
                    <View className='content'>
                        <View className='name'>name:{projectItem.name}</View>
                        <View className='desc'>desc:{projectItem.desc}</View>
                    </View>
                    <View className='footer'>
                        <View className='frame'>{projectItem.frame}</View>
                        <View className='author'>{projectItem.author}</View>
                        <View className='date'>{projectItem.createDate}</View>
                    </View>
                </View>

            </View>
        )
    }

}