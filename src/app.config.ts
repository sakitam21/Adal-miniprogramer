export default {
  pages: [
    'pages/index/index',
    'pages/blog/blog',
    'pages/project/project',
    'pages/person_center/person_center',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#00CED5',
    navigationBarTitleText: '阿达尔',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#cdcdcd',
    selectedColor: '#169891',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/tabbar/home.png',
        selectedIconPath: 'static/images/tabbar/home_selected.png'
      },
      {
        pagePath: 'pages/blog/blog',
        text: '博客管理',
        iconPath: 'static/images/tabbar/home.png',
        selectedIconPath: 'static/images/tabbar/home_selected.png'
      },
      {
        pagePath: 'pages/project/project',
        text: '项目管理',
        iconPath: 'static/images/tabbar/home.png',
        selectedIconPath: 'static/images/tabbar/home_selected.png'
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
