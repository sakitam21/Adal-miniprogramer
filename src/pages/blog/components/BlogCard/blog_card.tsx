import { Component } from 'react'
import { View } from '@tarojs/components'
import './blog_card.scss'

interface IProps {
    blogItem: {
        id: number
        title: string
        content: string
        author: string
        typeId: number
    }
}

export default class BlogCard extends Component<IProps, {}>{

    constructor(props) {
        super(props)
    }
    render(): JSX.Element {
        const {blogItem} = this.props
        return (
            <View className='blog-card'>
                <View className='rankId'>{blogItem.id}</View>
                <View className='blog-body'>
                    <View className='title'>{blogItem.title}</View>
                    <View className='content'>{blogItem.content}</View>
                    <View className='author'>{blogItem.author}</View>
                </View>
            </View>
        )
    }
}