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

    render() {
        return (
            <View className='person_center'>
                <AtList>
                    <AtListItem
                        title='姜岁岁'
                        note='描述信息'
                        arrow='right'
                        thumb={avatarImg}
                    >
                    </AtListItem>
                </AtList>

                <AtList>
                    <AtListItem
                        title='姜岁岁'
                        arrow='right'
                    >
                    </AtListItem>
                    <AtListItem
                        title='姜岁岁'
                        arrow='right'
                    >
                    </AtListItem>
                    <AtListItem
                        title='姜岁岁'
                        arrow='right'
                    >
                    </AtListItem>
                </AtList>

            </View>
        )
    }
}
