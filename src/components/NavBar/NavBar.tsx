import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

interface IState {
    statusBarHeight: number
    navbarHeight: number
}

export default class NavBar extends Component<{}, IState> {

    constructor(props) {
        super(props)
        this.state = {
            statusBarHeight: 0,
            navbarHeight: 0
        }
    }

    componentDidMount() {
        // 获取状态栏高度
        const { statusBarHeight, pixelRatio } = Taro.getSystemInfoSync()
        console.log(Taro.getSystemInfoSync())
        //获取右上角菜单的尺寸位置
        const menuButton = Taro.getMenuButtonBoundingClientRect()
        console.log(Taro.getMenuButtonBoundingClientRect())
        const { top, height } = menuButton;


        const navbarHeight = (top - statusBarHeight) * 2 + height
        // 导航栏高度
        console.log(navbarHeight);
        this.setState({
            statusBarHeight: statusBarHeight,
            navbarHeight: navbarHeight
        })
    }


    render(): JSX.Element {
        const { statusBarHeight, navbarHeight } = this.state
        return (
            <View
                style={{
                    position: 'fixed',
                    top: statusBarHeight + 'px',
                    left: 0,
                    height: navbarHeight + 'px',
                    width: '100vw',
                    backgroundColor: '#00CED5',
                    color: '#FFFFFF'
                }}>
                首页
            </View>
        )
    }
}