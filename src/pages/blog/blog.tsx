import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs } from 'taro-ui'
import NavBar from '../../components/NavBar/NavBar'
import BlogCard from './components/BlogCard/blog_card'
import './blog.scss'

interface IState {
    value: string
    current: number
    tabList: any[]
    blogList: any[]
    currentBlogList: any[]
}

export default class Blog extends Component<{}, IState> {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            current: 0,
            tabList: [
                { title: '推荐' },
                { title: 'C/C++' },
                { title: 'Java' },
                { title: 'JavaScript' },
                { title: 'PHP' },
                { title: 'Python' },
                { title: '人工智能' },
                { title: '数据结构与算法' }
            ],
            blogList: [
                { id: 0, title: '第1篇blog', content: '内容内容内容内容内容内容内容内容内容内容内容内容', author: '姜岁岁', typeId: 0 },
                { id: 1, title: '第2篇blog', content: '内容内容内容内容内容内容内容内容内容内容内容内容', author: '姜岁岁', typeId: 1 },
                { id: 2, title: '第3篇blog', content: '内容内容内容内容内容内容内容内容内容内容内容内容', author: '姜岁岁', typeId: 1 },
                { id: 3, title: '第4篇blog', content: '内容内容内容内容内容内容内容内容内容内容内容内容', author: '姜岁岁', typeId: 2 },
                { id: 4, title: '第5篇blog', content: '内容内容内容内容内容内容内容内容内容内容内容内容', author: '姜岁岁', typeId: 0 },
            ],
            currentBlogList: []
        }
    }

    componentDidMount() {
        const { current } = this.state
        this.getCurrentBlogList(current)
    }

    getCurrentBlogList(current) {
        const { blogList } = this.state
        const currentBlogList = blogList.filter((item) => item.typeId == current)
        this.setState({
            currentBlogList
        })
    }

    onChange(value) {
        this.setState({
            value: value
        })
    }

    onActionClick() {
        console.log('开始搜索')
    }

    handleClick(value) {
        this.setState({
            current: value
        })
        this.getCurrentBlogList(value)
    }

    render(): JSX.Element {
        const { value, current, tabList, currentBlogList } = this.state
        return (
            <View className='blog-page'>
                <NavBar navbarTitle='博客'></NavBar>
                <View className='guide-box' style={{display:'none'}}>
                    <Text>博客页的功能描述：1.可以搜索 2.分类查看博客(参考《CSDN》小程序) 3.博客详情页可以关注博主、评论博客、分享博客、收藏博客、点赞博客</Text>
                </View>
                <View className='search-box'>
                    <View className='header'>
                        <Text className='title'>Adal Miniprogramer</Text>
                        <Text className='desc'>用于学习管理的小程序</Text>
                    </View>
                    <View className='searchbar'>
                        <AtSearchBar
                            showActionButton
                            value={value}
                            onChange={this.onChange.bind(this)}
                            onActionClick={this.onActionClick.bind(this)}
                        />
                    </View>
                </View>
                <View className='blog-content'>
                    <AtTabs current={current} scroll tabList={tabList} onClick={this.handleClick.bind(this)}></AtTabs>
                    <View className='blog-list'>
                        {currentBlogList.map((item) => (
                            <BlogCard blogItem={item}></BlogCard>
                        ))}
                    </View>
                </View>
            </View>
        )
    }
}