import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import avatarImg from '../../static/images/person_center/avatar.jpeg'
import './person_center.scss'

export default class PersonCenter extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render(): JSX.Element {
        return (
            <View className='person_center'>

                <View className='gutter'></View>

                <AtList>
                    <AtListItem
                        title='姜岁岁'
                        note='描述信息'
                        arrow='right'
                        thumb={avatarImg}
                    >
                    </AtListItem>
                </AtList>

                <View className='gutter'></View>

                <AtList>
                    <AtListItem
                        title='当前项目'
                        arrow='right'
                    >
                    </AtListItem>
                </AtList>

                <View className='gutter'></View>

                <AtList>
                    <AtListItem
                        title='意见反馈'
                        arrow='right'
                    >
                    </AtListItem>
                    <AtListItem
                        title='关于'
                        arrow='right'
                    >
                    </AtListItem>
                </AtList>

            </View>
        )
    }
}
