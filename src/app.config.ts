export default {
  pages: [
    'pages/project/project',
    'pages/index/index',
    'pages/blog/blog',
    // 'pages/project/project',
    'pages/person_center/person_center',
    'pages/project_detail/project_detail',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#00CED5',
    navigationBarTitleText: '阿达尔',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#cdcdcd',
    selectedColor: '#00CED5',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/tabbar/home.png',
        selectedIconPath: 'static/images/tabbar/home_selected.png'
      },
      {
        pagePath: 'pages/blog/blog',
        text: '博客',
        iconPath: 'static/images/tabbar/blog.png',
        selectedIconPath: 'static/images/tabbar/blog_selected.png'
      },
      {
        pagePath: 'pages/project/project',
        text: '项目',
        iconPath: 'static/images/tabbar/project.png',
        selectedIconPath: 'static/images/tabbar/project_selected.png'
      },
      {
        pagePath: 'pages/person_center/person_center',
        text: '个人中心',
        iconPath: 'static/images/tabbar/person_center.png',
        selectedIconPath: 'static/images/tabbar/person_center_selected.png'
      }
    ]
  }
}
