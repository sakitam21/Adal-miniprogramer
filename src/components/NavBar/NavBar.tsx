import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

interface IProps {
    navbarTitle: string
    arrow?: boolean
}

interface IState {
    statusBarHeight: number
    navbarHeight: number
}

export default class NavBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            statusBarHeight: 0,
            navbarHeight: 0
        }
    }

    componentDidMount() {
        // 获取状态栏高度
        const { statusBarHeight } = Taro.getSystemInfoSync()

        //获取右上角菜单的尺寸位置
        const menuButton = Taro.getMenuButtonBoundingClientRect()
        const { top, height } = menuButton;

        const navbarHeight = (top - statusBarHeight) * 2 + height

        this.setState({
            statusBarHeight: statusBarHeight,
            navbarHeight: navbarHeight
        })
    }


    render(): JSX.Element {
        const { statusBarHeight, navbarHeight } = this.state
        const { navbarTitle, arrow } = this.props
        return (
            <View className='navbar'>
                <View
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        paddingTop: statusBarHeight + 'px',
                        height: navbarHeight + 'px',
                        lineHeight: navbarHeight + 'px',
                        textAlign: 'center',
                        width: '100vw',
                        backgroundColor: '#00CED5',
                        color: '#FFFFFF',
                        zIndex: 1000,
                    }}>
                    <Text>{navbarTitle}</Text>
                    {arrow && (
                        <View
                            style={{
                                position: 'absolute',
                                top: statusBarHeight + (navbarHeight - 40) / 2 + 'px',
                                left: '12px',
                            }}
                            onClick={() => { Taro.navigateBack() }}
                        >
                            <AtIcon value='chevron-left' size='30' color='#FFFFFF'></AtIcon>
                        </View>
                    )}
                </View>

                <View
                    style={{
                        position: 'relative',
                        height: statusBarHeight + navbarHeight + 'px',
                        width: '100vw',
                        backgroundColor: '#00CED5'
                    }}
                >

                </View>
            </View>
        )
    }
}