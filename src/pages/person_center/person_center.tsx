import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import NavBar from '../../components/NavBar/NavBar'
import avatarImg from '../../static/images/person_center/avatar.jpeg'
import './person_center.scss'

export default class PersonCenter extends Component {

    render(): JSX.Element {
        return (
            <View className='person_center'>
                <NavBar navbarTitle='我的'></NavBar>

                <View className='gutter'></View>

                <AtList hasBorder={false}>
                    <AtListItem
                        title='姜岁岁'
                        note='描述信息'
                        arrow='right'
                        thumb={avatarImg}
                        hasBorder={false}
                    >
                    </AtListItem>
                </AtList>

                <View className='gutter'></View>

                <AtList hasBorder={false}>
                    <AtListItem
                        title='博客'
                        arrow='right'
                        hasBorder={false}
                    >
                    </AtListItem>
                </AtList>

                <View className='gutter'></View>

                <AtList hasBorder={false}>
                    <AtListItem
                        title='项目'
                        arrow='right'
                        hasBorder={false}
                    >
                    </AtListItem>
                </AtList>

                <View className='gutter'></View>

                <AtList hasBorder={false}>
                    <AtListItem
                        title='意见反馈'
                        arrow='right'
                        hasBorder={false}
                    >
                    </AtListItem>
                    <AtListItem
                        title='关于'
                        arrow='right'
                        hasBorder={false}
                    >
                    </AtListItem>
                </AtList>

            </View>
        )
    }
}
